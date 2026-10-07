# Practical 9 – RIP Routing using Cisco Packet Tracer

[← Back to Home](README.md)

---

## 🎯 AIM
To configure RIP version 2 for automatic dynamic route discovery between two remote LANs.

---

## 🖥️ Devices Required
- 4 × PC (PC0, PC1, PC2, PC3)
- 2 × Switch 2960-24TT (SW0, SW1)
- 2 × Router 1941 (R0, R1)
- Copper Straight-Through cables

> **Use the same topology as Practical 8.** The only difference is that **RIP replaces manual static routes** — routes are learned **automatically**.

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

### Networks Used

| Network | Subnet | Connected To |
|---------|--------|-------------|
| LAN 1 | 192.168.10.0/24 | R0 G0/0, PC0, PC1 |
| Router Link | 10.0.0.0/30 | R0 G0/1 ↔ R1 G0/1 |
| LAN 2 | 192.168.20.0/24 | R1 G0/0, PC2, PC3 |

### PC and Router IPs (same as Practical 8)

| Device | IP Address | Gateway |
|--------|-----------|---------|
| PC0 | 192.168.10.10 | 192.168.10.1 |
| PC1 | 192.168.10.11 | 192.168.10.1 |
| R0 G0/0 | 192.168.10.1 | — |
| R0 G0/1 | 10.0.0.1 | — |
| R1 G0/1 | 10.0.0.2 | — |
| R1 G0/0 | 192.168.20.1 | — |
| PC2 | 192.168.20.10 | 192.168.20.1 |
| PC3 | 192.168.20.11 | 192.168.20.1 |

---

## 🔧 Steps

### Step 1 – Configure Router Interfaces (same as Practical 8)

On **R0**:
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
```

On **R1**:
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
```

### Step 2 – Configure RIP on R0

```
enable
configure terminal

router rip
 version 2
 no auto-summary
 network 192.168.10.0
 network 10.0.0.0
 exit

end
```

### Step 3 – Configure RIP on R1

```
enable
configure terminal

router rip
 version 2
 no auto-summary
 network 192.168.20.0
 network 10.0.0.0
 exit

end
```

### Step 4 – Wait for Convergence
- Wait **30–60 seconds** for routing tables to update automatically

### Step 5 – Verify

Check routing table (RIP routes are marked with **"R"**):
```
show ip route
```

Test from **PC0** → Desktop → Command Prompt:
```
ping 192.168.20.10
```

> ✅ Routes marked with **"R"** confirm RIP is working. A successful ping verifies end-to-end connectivity.

---

## 🔑 KEY POINTS

| Setting | Detail |
|---------|--------|
| **version 2** | Use RIPv2 — supports VLSM and classless routing |
| **no auto-summary** | Disables automatic route summarization |
| **network** | Advertise directly connected networks |
| **Metric** | Hop count (maximum 15 hops) |
| **Update Timer** | Sends routing updates every **30 seconds** |

### Static vs RIP

| Feature | Static Routing | RIP Routing |
|---------|---------------|-------------|
| Configuration | Manual on each router | Configured once, auto-learns |
| Updates | No automatic updates | Updates every 30 seconds |
| Scalability | Poor (large networks) | Better |
| Failure handling | Manual reconfiguration | Auto-recalculates routes |

---

## ✅ RESULT
RIP version 2 was configured and routes were dynamically learned between networks.

---
[← Practical 8](practical8.md) | [Back to Home](README.md) | [Next → Practical 10](practical10.md)
