# Practical 3 – Study and Configure Bus and Mesh Network Topologies

[← Back to Home](README.md)

---

## 🎯 AIM
To study, design and simulate Bus and Mesh network topologies using Cisco Packet Tracer.

---

## PART A – BUS TOPOLOGY

> **Note:** Packet Tracer does not support a real coaxial bus. A **Hub** is used to simulate the shared-medium bus concept.

### 🖥️ Devices Required
- 4 × PC (PC0, PC1, PC2, PC3)
- 1 × Hub-PT
- Copper Straight-Through cables

### 📋 IP Configuration

| Device | IP Address | Subnet Mask |
|--------|-----------|-------------|
| PC0 | 192.168.10.1 | 255.255.255.0 |
| PC1 | 192.168.10.2 | 255.255.255.0 |
| PC2 | 192.168.10.3 | 255.255.255.0 |
| PC3 | 192.168.10.4 | 255.255.255.0 |

### 🔧 Steps

1. Add **PC0, PC1, PC2, PC3** and a **Hub-PT** to the workspace
2. Connect all four PCs to the Hub using **Copper Straight-Through** cables:
   ```
   PC0  →  Hub
   PC1  →  Hub
   PC2  →  Hub
   PC3  →  Hub
   ```
3. Assign IP addresses to each PC as shown in the table (no gateway needed)
4. From PC0 → Desktop → **Command Prompt**:
   ```
   ping 192.168.10.2
   ping 192.168.10.3
   ping 192.168.10.4
   ```
5. Verify successful replies ✅

### 🔑 Bus Topology Key Points
- All devices share a **single communication line** (the Hub acts as the bus)
- Data sent by one device is received by **all other devices**
- Simple but prone to **collisions**

---

## PART B – MESH TOPOLOGY (Full Mesh with 4 Routers)

With 4 routers, every router connects to every other → **6 links total**

```
Connections:
R0 ↔ R1
R0 ↔ R2
R0 ↔ R3
R1 ↔ R2
R1 ↔ R3
R2 ↔ R3
```

### 🖥️ Devices Required
- 4 × Router 1941
- Copper Cross-Over or Serial cables (depending on interface type)

### 📋 Subnet Plan (Point-to-Point /30 Links)

| Link | Subnet | Router A IP | Router B IP |
|------|--------|-------------|-------------|
| R0 ↔ R1 | 10.0.0.0/30 | 10.0.0.1 | 10.0.0.2 |
| R0 ↔ R2 | 10.0.0.4/30 | 10.0.0.5 | 10.0.0.6 |
| R0 ↔ R3 | 10.0.0.8/30 | 10.0.0.9 | 10.0.0.10 |
| R1 ↔ R2 | 10.0.0.12/30 | 10.0.0.13 | 10.0.0.14 |
| R1 ↔ R3 | 10.0.0.16/30 | 10.0.0.17 | 10.0.0.18 |
| R2 ↔ R3 | 10.0.0.20/30 | 10.0.0.21 | 10.0.0.22 |

### 🔧 Steps

1. Add **4 × Router 1941** to the workspace
2. Add required interface modules if needed (e.g. HWIC-2T for serial links)
3. Connect every router to every other router (6 cables total)
4. Configure each interface — example for **R0**:
   ```
   enable
   configure terminal

   interface GigabitEthernet 0/0
    ip address 10.0.0.1 255.255.255.252
    no shutdown

   interface GigabitEthernet 0/1
    ip address 10.0.0.5 255.255.255.252
    no shutdown

   interface Serial 0/0/0
    ip address 10.0.0.9 255.255.255.252
    no shutdown

   end
   ```
5. Repeat for R1, R2, R3 with their respective IPs
6. Test with:
   ```
   ping <neighbor-IP>
   ```

### 🔑 Mesh Topology Key Points
- Every device has a **dedicated link** to every other device
- Highly **reliable** — if one link fails, data takes another path
- Very **expensive** — number of links = n(n-1)/2

---

## ✅ RESULT
Bus and Mesh topologies were studied and simulated successfully.

---
[← Practical 2](practical2.md) | [Back to Home](README.md) | [Next → Practical 4](practical4.md)
