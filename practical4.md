# Practical 4 – Star and Ring Network Topologies

[← Back to Home](README.md)

---

## 🎯 AIM
To design and configure Star and Ring network topologies in Cisco Packet Tracer.

---

## PART A – STAR TOPOLOGY

### 🖥️ Devices Required
- 3 × PC (PC0, PC1, PC2)
- 1 × Switch **2960-24TT** (central device)
- Copper Straight-Through cables

### 📋 IP Configuration

| Device | IP Address | Subnet Mask |
|--------|-----------|-------------|
| PC0 | 192.168.3.1 | 255.255.255.0 |
| PC1 | 192.168.3.2 | 255.255.255.0 |
| PC2 | 192.168.3.3 | 255.255.255.0 |

### 🔧 Steps

1. Add **3 PCs** and a **2960-24TT switch** to the workspace
2. Connect **every PC directly to the central switch** using Copper Straight-Through:
   ```
   PC0  →  Switch Fa0/1
   PC1  →  Switch Fa0/2
   PC2  →  Switch Fa0/3
   ```
3. Assign IP addresses to each PC (no gateway needed)
4. From PC0 → Desktop → **Command Prompt**:
   ```
   ping 192.168.3.2
   ping 192.168.3.3
   ```
5. Successful replies confirm star topology ✅

### 🔑 Star Topology Key Points
- All devices connect to a **central switch/hub**
- If **one cable fails**, only that device is affected
- **Most common** topology in modern LANs
- Easy to add/remove devices

---

## PART B – RING TOPOLOGY

> **⚠️ Important:** A normal Packet Tracer PC has **only one** Ethernet interface — do NOT try to connect PCs directly in a ring. Use **4 switches** to form the ring instead.

### 🖥️ Devices Required
- 4 × Switch **2960-24TT** (S0, S1, S2, S3)
- 4 × PC (optional — one per switch for testing)
- Copper Straight-Through cables

### 🔗 Switch Ring Connections

```
S0  →  S1
S1  →  S3
S3  →  S2
S2  →  S0
```

This forms a complete ring: S0 → S1 → S3 → S2 → S0

### 🔧 Steps

1. Add **4 × 2960-24TT switches**: S0, S1, S2, S3
2. Connect switches to form the ring as shown above
3. Optionally connect one PC to each switch using Straight-Through cable
4. If testing with PCs, assign IPs:

| Device | IP Address | Connected To |
|--------|-----------|-------------|
| PC0 | 192.168.4.1 | S0 |
| PC1 | 192.168.4.2 | S1 |
| PC2 | 192.168.4.3 | S2 |
| PC3 | 192.168.4.4 | S3 |

5. Subnet Mask for all: **255.255.255.0**
6. Test from PC0 → Desktop → **Command Prompt**:
   ```
   ping 192.168.4.2
   ping 192.168.4.3
   ping 192.168.4.4
   ```

### 🔑 Ring Topology Key Points
- Data travels in **one direction** around the ring
- Each device has exactly **two connections** (to left and right neighbours)
- If **one link fails**, the whole ring can be affected (unless dual ring)
- Used in **Token Ring** and **FDDI** networks

---

## ✅ RESULT
Star and Ring topologies were studied and configured successfully.

---
[← Practical 3](practical3.md) | [Back to Home](README.md) | [Next → Practical 5](practical5.md)
