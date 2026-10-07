# Practical 5 – Simulate Two Different LANs Using a Router

[← Back to Home](README.md)

---

## 🎯 AIM
To connect two separate LANs through a router and verify inter-network communication using ping.

---

## 🖥️ Devices Required
- 4 × PC (PC0, PC1, PC2, PC3)
- 2 × Switch 2960-24TT (SW0, SW1)
- 1 × Router 1941

---

## 🗺️ Network Topology

```
PC0 ──┐                              ┌── PC2
      ├── SW0 ── Router (G0/0|G0/1) ── SW1 ──┤
PC1 ──┘                              └── PC3

LAN 1: 192.168.1.0/24        LAN 2: 192.168.2.0/24
```

---

## 📋 IP Configuration

### LAN 1 – 192.168.1.0/24

| Device | IP Address | Subnet Mask | Default Gateway |
|--------|-----------|-------------|-----------------|
| PC0 | 192.168.1.10 | 255.255.255.0 | 192.168.1.1 |
| PC1 | 192.168.1.11 | 255.255.255.0 | 192.168.1.1 |
| Router G0/0 | 192.168.1.1 | 255.255.255.0 | — |

### LAN 2 – 192.168.2.0/24

| Device | IP Address | Subnet Mask | Default Gateway |
|--------|-----------|-------------|-----------------|
| PC2 | 192.168.2.10 | 255.255.255.0 | 192.168.2.1 |
| PC3 | 192.168.2.11 | 255.255.255.0 | 192.168.2.1 |
| Router G0/1 | 192.168.2.1 | 255.255.255.0 | — |

---

## 🔧 Steps

### Step 1 – Add and Connect Devices
1. Add **4 PCs**, **2 × 2960 switches** and **1 × 1941 router**
2. Connect:
   ```
   PC0  →  SW0 Fa0/1
   PC1  →  SW0 Fa0/2
   SW0  →  Router G0/0
   Router G0/1  →  SW1
   SW1 Fa0/1  →  PC2
   SW1 Fa0/2  →  PC3
   ```

### Step 2 – Configure PC IP Addresses
- Click each PC → **Desktop** → **IP Configuration**
- Enter the IP, Subnet Mask and Default Gateway from the table above

### Step 3 – Configure the Router

Open **Router CLI** and enter:

```
enable
configure terminal

interface gigabitEthernet 0/0
 ip address 192.168.1.1 255.255.255.0
 no shutdown
 exit

interface gigabitEthernet 0/1
 ip address 192.168.2.1 255.255.255.0
 no shutdown
 exit

end
```

### Step 4 – Test Connectivity

From **PC0** → Desktop → Command Prompt:
```
ping 192.168.1.11    ← within LAN 1 (should succeed)
ping 192.168.2.10    ← across to LAN 2 (verifies router)
```

> ✅ A successful second ping confirms inter-LAN communication via the router.

---

## 🔑 KEY POINTS
- The router has **two interfaces** — one for each LAN
- Each interface acts as the **default gateway** for its LAN
- PCs must have the **correct gateway** set to communicate across LANs
- No static routes needed here — the router knows both directly connected networks

---

## ✅ RESULT
Two different LANs were successfully connected using a router.

---
[← Practical 4](practical4.md) | [Back to Home](README.md) | [Next → Practical 6](practical6.md)
