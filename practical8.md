# Practical 8 – Static Routing using Cisco Packet Tracer

[← Back to Home](README.md)

---

## 🎯 AIM
To configure static routes on two routers and enable communication between two remote LANs.

---

## 🖥️ Devices Required
- 4 × PC (PC0, PC1, PC2, PC3)
- 2 × Switch 2960-24TT (SW0, SW1)
- 2 × Router 1941 (R0, R1)
- Copper Straight-Through cables

---

## 🗺️ Network Topology

```
PC0 ──┐                                    ┌── PC2
      ├── SW0 ── R0 (G0/0|G0/1)──(G0/1|G0/0) R1 ── SW1 ──┤
PC1 ──┘                                    └── PC3

LAN 1: 192.168.10.0/24   Link: 10.0.0.0/30   LAN 2: 192.168.20.0/24
```

---

## 📋 IP Configuration

### LAN 1 – 192.168.10.0/24

| Device | IP Address | Subnet Mask | Gateway |
|--------|-----------|-------------|---------|
| PC0 | 192.168.10.10 | 255.255.255.0 | 192.168.10.1 |
| PC1 | 192.168.10.11 | 255.255.255.0 | 192.168.10.1 |
| R0 G0/0 | 192.168.10.1 | 255.255.255.0 | — |

### Router-to-Router Link – 10.0.0.0/30

| Device | IP Address | Subnet Mask |
|--------|-----------|-------------|
| R0 G0/1 | 10.0.0.1 | 255.255.255.252 |
| R1 G0/1 | 10.0.0.2 | 255.255.255.252 |

### LAN 2 – 192.168.20.0/24

| Device | IP Address | Subnet Mask | Gateway |
|--------|-----------|-------------|---------|
| PC2 | 192.168.20.10 | 255.255.255.0 | 192.168.20.1 |
| PC3 | 192.168.20.11 | 255.255.255.0 | 192.168.20.1 |
| R1 G0/0 | 192.168.20.1 | 255.255.255.0 | — |

---

## 🔧 Steps

### Step 1 – Connect All Devices
```
PC0  →  SW0 Fa0/1
PC1  →  SW0 Fa0/2
SW0  →  R0 G0/0
R0 G0/1  →  R1 G0/1
R1 G0/0  →  SW1
SW1 Fa0/1  →  PC2
SW1 Fa0/2  →  PC3
```

### Step 2 – Configure R0

```
enable
configure terminal

interface GigabitEthernet 0/0
 ip address 192.168.10.1 255.255.255.0
 no shutdown
 exit

interface GigabitEthernet 0/1
 ip address 10.0.0.1 255.255.255.252
 no shutdown
 exit

ip route 192.168.20.0 255.255.255.0 10.0.0.2

end
```

### Step 3 – Configure R1

```
enable
configure terminal

interface GigabitEthernet 0/0
 ip address 192.168.20.1 255.255.255.0
 no shutdown
 exit

interface GigabitEthernet 0/1
 ip address 10.0.0.2 255.255.255.252
 no shutdown
 exit

ip route 192.168.10.0 255.255.255.0 10.0.0.1

end
```

### Step 4 – Configure PC Gateways
- PC0 and PC1 gateway: `192.168.10.1`
- PC2 and PC3 gateway: `192.168.20.1`

### Step 5 – Test Connectivity

From **PC0** → Desktop → Command Prompt:
```
ping 192.168.20.10
```

Verify routes on router:
```
show ip route
```

> ✅ A successful ping from PC0 to 192.168.20.10 confirms static routing is working.

---

## 🔑 KEY POINTS

```
Static Route Syntax:
ip route <destination-network> <subnet-mask> <next-hop-IP>

Example on R0:
ip route 192.168.20.0 255.255.255.0 10.0.0.2
       (reach LAN2)    (mask)       (via R1's interface)
```

- Static routes must be configured **manually** on each router
- Each router needs a route to every **remote** network
- Use `/30` subnet for point-to-point router links (only 2 usable IPs)

---

## ✅ RESULT
Static routes were configured and communication between two remote LANs was verified.

---
[← Practical 7](practical7.md) | [Back to Home](README.md) | [Next → Practical 9](practical9.md)
