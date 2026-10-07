# Practical 8 – Static Routing in Cisco Packet Tracer

[← Back to Home](README.md)

---

## 🎯 AIM
Configure Static Routing using 2 routers in Cisco Packet Tracer.

---

## 1. Understand the Topology

The basic topology consists of two different LANs connected through two routers:

```
PC0 ─┐
PC1 ─┼── Switch0 ─── Router0 ───── Router1 ─── Switch1 ─┬─ PC2
     ┘                                                    └─ PC3
```

There are two networks:
- **LAN 1:** `192.168.1.0/24`
- **LAN 2:** `192.168.2.0/24`

The routers communicate through a WAN link:
- **Router0:** `11.0.0.1`
- **Router1:** `11.0.0.2`

---

## 🔧 Steps

### Step 2 – Open Cisco Packet Tracer
1. Open **Cisco Packet Tracer**.
2. Select **File → New**. Keep the workspace empty.

### Step 3 – Add the Devices
From the device panel, add exactly:
- **4 PCs:** PC0, PC1, PC2, PC3
- **2 Switches:** Switch0, Switch1
- **2 Routers:** Router0, Router1

### Step 4 – Connect the Devices
The easiest way is to use the **Automatic Connecting Cable** (lightning bolt icon with "Automatically Choose Connection Type").

Wait until the links become active (green).
Connect them as follows:
- PC0 → Switch0
- PC1 → Switch0
- Switch0 → Router0
- Router0 → Router1
- Router1 → Switch1
- Switch1 → PC2
- Switch1 → PC3

### Step 5 – Configure the PCs
Assign IP addresses, subnet masks, and default gateways for each PC.
*(Double-click PC → Desktop → IP Configuration → Static)*

| PC | IP Address | Subnet Mask | Default Gateway |
|----|-----------|-------------|-----------------|
| PC0 | 192.168.1.2 | 255.255.255.0 | 192.168.1.1 |
| PC1 | 192.168.1.3 | 255.255.255.0 | 192.168.1.1 |
| PC2 | 192.168.2.2 | 255.255.255.0 | 192.168.2.1 |
| PC3 | 192.168.2.3 | 255.255.255.0 | 192.168.2.1 |

### Step 6 – Configure Router0
Click **Router0 → Config → Interfaces**.

**FastEthernet0/0 (LAN 1 connection):**
- **IP Address:** `192.168.1.1`
- **Subnet Mask:** `255.255.255.0`
- Turn the interface **On**.

**Serial2/0 (WAN connection to Router1):**
- **IP Address:** `11.0.0.1`
- **Subnet Mask:** `255.255.255.0`
- Turn the interface **On**.

### Step 7 – Configure Router1
Click **Router1 → Config → Interfaces**.

**FastEthernet0/0 (LAN 2 connection):**
- **IP Address:** `192.168.2.1`
- **Subnet Mask:** `255.255.255.0`
- Turn the interface **On**.

**Serial2/0 (WAN connection to Router0):**
- **IP Address:** `11.0.0.2`
- **Subnet Mask:** `255.255.255.0`
- Turn the interface **On**.

### Step 8 – Understand why Static Routing is required
At this point:
- **Router0** knows `192.168.1.0/24` (directly connected to LAN 1)
- **Router1** knows `192.168.2.0/24` (directly connected to LAN 2)

But Router0 doesn't know how to reach `192.168.2.0/24`, and Router1 doesn't know how to reach `192.168.1.0/24`. We must manually configure these paths using **Static Routing**.

### Step 9 – Configure Static Route on Router0
Click **Router0 → CLI**, press Enter, and type:
```
enable
configure terminal
ip route 192.168.2.0 255.255.255.0 11.0.0.2
```
**Meaning:**
- **Destination network:** `192.168.2.0`
- **Subnet mask:** `255.255.255.0`
- **Next hop (Router1's IP):** `11.0.0.2`

### Step 10 – Configure Static Route on Router1
Click **Router1 → CLI**, press Enter, and type:
```
enable
configure terminal
ip route 192.168.1.0 255.255.255.0 11.0.0.1
```
**Meaning:**
- **Destination network:** `192.168.1.0`
- **Subnet mask:** `255.255.255.0`
- **Next hop (Router0's IP):** `11.0.0.1`

### Step 11 – Test the network
Verify communication between the two LANs.
From **PC1 → Desktop → Command Prompt**:
```
ping 192.168.2.2
```
If configured correctly, you should get `Reply from 192.168.2.2`.

### Step 12 – Test the reverse direction
From **PC2 → Desktop → Command Prompt**:
```
ping 192.168.1.2
ping 192.168.1.3
```
You should receive replies from PC0 and PC1.

---

## 🛠️ Troubleshooting (If Ping Fails)
If your ping tests fail, check the following:
1. **PC IP Addresses:** Are they exactly as in the table?
2. **Gateways:** Do PC0/PC1 point to `192.168.1.1` and PC2/PC3 point to `192.168.2.1`?
3. **Router interfaces:** Ensure all relevant FastEthernet and Serial interfaces are turned **On**.
4. **Static routes:** Check that `ip route` was typed correctly with the exact networks and next hops.

---

## ✅ RESULT
Static Routing was successfully configured between two routers, allowing two separate LANs to communicate.

---
[← Practical 7](practical7.md) | [Back to Home](README.md) | [Next → Practical 9](practical9.md)
