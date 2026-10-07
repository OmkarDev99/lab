# Practical 5 – Simulate Two Different LAN Using Router

[← Back to Home](README.md)

---

## 🎯 AIM
Simulate two different LANs using a router in Cisco Packet Tracer.
**Objective:** Build a LAN and connect more than one LAN using a router.

This practical has two parts:
1. Implement a single LAN.
2. Connect two LANs to form a WAN-type connection using two routers.

---

## PART A – Implement LAN

### 🔧 Steps

#### Step 1 – Open Packet Tracer
1. Open **Cisco Packet Tracer**.
2. Select **File → New**.

#### Step 2 – Add the devices
From the device list, add:
- **3 PCs**
- **1 Switch**
- **1 Router**

Arrange them like this:
```
PC0 ──┐
PC1 ──┼── Switch ─── Router
PC2 ──┘
```

#### Step 3 – Connect PCs to Switch
Select **Connections** (⚡) → **Copper Straight-Through**.
For each PC:
1. Click the PC.
2. Select `FastEthernet0`.
3. Click the switch.
4. Select an available `FastEthernet` port.

#### Step 4 – Connect Switch to Router
Use an Ethernet connection:
Connect: **Switch → Router FastEthernet0/0**
*(Connect a switch port to the router's Ethernet interface, such as FastEthernet/GigabitEthernet).*

#### Step 5 – Configure the PCs
For each PC, double-click PC → **Desktop → IP Configuration**.
Enter the IP Address, Subnet Mask, and Default Gateway. The default gateway should be the IP address configured on the router interface connected to this LAN.

**Example Configuration (LAN 1):**
Network: `192.168.1.0` | Mask: `255.255.255.0` | Router IP: `192.168.1.1`

| Device | IP Address | Subnet Mask | Default Gateway |
|--------|-----------|-------------|-----------------|
| PC0 | 192.168.1.2 | 255.255.255.0 | 192.168.1.1 |
| PC1 | 192.168.1.3 | 255.255.255.0 | 192.168.1.1 |
| PC2 | 192.168.1.4 | 255.255.255.0 | 192.168.1.1 |

#### Step 6 – Configure the Router
1. Double-click the router.
2. Go to **Config → FastEthernet0/0** (or GigabitEthernet).
3. Set the router interface IP to the gateway address of your LAN:
   - **IP Address:** `192.168.1.1`
   - **Subnet Mask:** `255.255.255.0`
4. Make sure to turn the interface **On** (check the Port Status box).

#### Step 7 – Verify LAN
Open **PC0 → Desktop → Command Prompt** and test another PC:
```
ping 192.168.1.3
ping 192.168.1.4
```
> ✅ If replies are received, your LAN is working.

---

## PART B – Connect Two LANs

Now we connect two different LANs through routers.

### 🔧 Steps

#### Step 1 – Add the second LAN
Add another switch, PCs for the second LAN, and another router.
The basic structure becomes:
```
       LAN 1                         LAN 2

PCs → Switch → Router0 ───── Router1 ← Switch ← PCs
```

#### Step 2 – Configure the second LAN
Connect the PCs to the second switch using Ethernet cables.
```
PC3 ──┐
PC4 ──┼── Switch1 ─── Router1
PC5 ──┘
```
Configure the PCs with IP addresses belonging to a **different** network.

**Example Configuration (LAN 2):**
Network: `192.168.2.0/24`

| Device | IP Address | Subnet Mask | Default Gateway |
|--------|-----------|-------------|-----------------|
| PC3 | 192.168.2.2 | 255.255.255.0 | 192.168.2.1 |
| PC4 | 192.168.2.3 | 255.255.255.0 | 192.168.2.1 |
| PC5 | 192.168.2.4 | 255.255.255.0 | 192.168.2.1 |

#### Step 3 – Configure Router1
1. Connect **Switch1 → Router1**.
2. Configure the router interface connected to the second LAN (`FastEthernet0/0`):
   - **IP Address:** `192.168.2.1`
   - **Subnet Mask:** `255.255.255.0`
3. Enable the interface (Turn **On**).

#### Step 4 – Connect Router0 and Router1
Now connect the two routers. Connect an interface on the second LAN router to an interface on the first LAN router (e.g., `FastEthernet 0/1`).

Your topology should now look like:
```
 PC0       PC1
  |         |
  └── Switch0
       |
    Router0
       |
       |  WAN link
       |
    Router1
       |
    Switch1
     /   \
   PC3   PC4
```

#### Step 5 – Configure the Router-to-Router link
Give the two router interfaces addresses from another network (the WAN link).

**Example Configuration (WAN link):**
- **Router0:** `10.0.0.1` | Mask: `255.255.255.252`
- **Router1:** `10.0.0.2` | Mask: `255.255.255.252`

*(Turn both interfaces On).*

#### Step 6 – Configure Static Routes on Router0
This is the most important part for connecting the LANs.
1. Double-click **Router0**.
2. Go to **Config → Static**.
3. Enter the details to reach LAN 2:
   - **Network Address:** `192.168.2.0` (Network of LAN 2)
   - **Subnet Mask:** `255.255.255.0` (Mask of LAN 2)
   - **Next Hop:** `10.0.0.2` (IP address of Router1's interface toward Router0)
4. Click **Add**.

#### Step 7 – Configure Static Route on Router1
Now configure the reverse route to reach LAN 1.
1. Double-click **Router1**.
2. Go to **Config → Static**.
3. Enter:
   - **Network Address:** `192.168.1.0` (Network of LAN 1)
   - **Subnet Mask:** `255.255.255.0` (Mask of LAN 1)
   - **Next Hop:** `10.0.0.1` (IP address of Router0's interface toward Router1)
4. Click **Add**.

#### Step 8 – Test the complete network
Now test communication between PCs belonging to different LANs.

From **PC0 → Desktop → Command Prompt**:
```
ping 192.168.2.2
```

> ✅ If you get `Reply from 192.168.2.2`, then the path `LAN 1 → Router0 → Router1 → LAN 2` is working successfully.

---

## ✅ RESULT
Two different LANs were successfully configured and connected using two routers in Cisco Packet Tracer.

---
[← Practical 4](practical4.md) | [Back to Home](README.md) | [Next → Practical 6](practical6.md)
