# Practical 4 – Star and Ring Topologies in Cisco Packet Tracer

[← Back to Home](README.md)

---

## 🎯 AIM
Study and Configure Star and Ring Network Topologies in Cisco Packet Tracer.

---

## PART A – STAR TOPOLOGY

### What is Star Topology?
In a star topology, every device is directly connected to a central switch/hub. Communication between devices passes through the central device.

---

### 🔧 Steps

#### Step 1 – Open Packet Tracer
1. Open **Cisco Packet Tracer**.
2. Create a **New Project**.

#### Step 2 – Add the Switch
Go to **Networking Devices → Switches & Hubs** and place 1 switch in the center:
```
          Switch
```

#### Step 3 – Add PCs
Go to **End Devices → PC** and place PCs around the switch. For easy execution, use 5 PCs:
```
PC0
PC1
PC2
PC3
PC4
```
*(The manual represents the number as (n) PCs, so the exact number can depend on the practical requirement.)*

#### Step 4 – Connect PCs to Switch
Select **Connections** (⚡) → **Copper Straight-Through**.
Connect every PC directly to the central switch:

```
             PC0
              |
PC1 ─────── Switch ───── PC2
              |
             PC3
              |
             PC4
```

For each connection:
1. Click **PC0** → select `FastEthernet0`.
2. Click the **switch** → select an available `FastEthernet` port.
3. Repeat for all PCs.
*(Copper straight-through cables are specified for PC-to-switch connections).*

#### Step 5 – Configure IP addresses
Double-click each PC: **Desktop → IP Configuration → Static**

| PC | IP Address | Subnet Mask |
|----|-----------|-------------|
| PC0 | 172.16.0.1 | 255.255.255.0 |
| PC1 | 172.16.0.2 | 255.255.255.0 |
| PC2 | 172.16.0.3 | 255.255.255.0 |
| PC3 | 172.16.0.4 | 255.255.255.0 |
| PC4 | 172.16.0.5 | 255.255.255.0 |

> No default gateway is required for this simple same-subnet setup.

#### Step 6 – Test the Star Topology
Go to **PC0 → Desktop → Command Prompt** and type:
```
ping 172.16.0.2
ping 172.16.0.3
```
You should get replies. You can also test:
```
ping 172.16.0.4
ping 172.16.0.5
```
*(Verify that all PCs can communicate successfully).*

#### Step 7 – Use Simple PDU
Alternatively, demonstrate the packet flow:
1. Select **Add Simple PDU** (envelope icon).
2. Click the source PC.
3. Click the destination PC.
4. Observe the packet travelling through the switch.

---

## PART B – RING TOPOLOGY

### What is Ring Topology?
In a ring topology, devices are connected in a closed loop. Each switch is connected to two neighboring switches.

---

### 🔧 Steps

#### Step 1 – Create a New Project
Go to **File → New**. Select Empty Activity under the New tab.

#### Step 2 – Add PCs and Switches
Add 4 PCs and 4 switches. Place them like this:

```
PC0       PC1
 |         |
S0        S1
 |         |
S3────────S2
```

#### Step 3 – Connect each PC to its Switch
Connect using **Copper Straight-Through** cables:
- PC0 → Switch0
- PC1 → Switch1
- PC2 → Switch2
- PC3 → Switch3

*(Each PC must have a direct connection to its own switch).*

#### Step 4 – Connect the Switches in a Ring
Connect the switches in a closed loop using **Copper Crossover** cables:
```
Switch0 → Switch1 → Switch2 → Switch3 → Switch0
```

Your complete topology diagram:
```
       Switch0
       /     \
      /       \
 Switch1     Switch3
      \       /
       \     /
       Switch2
```

#### Step 5 – Configure IP addresses
Double-click each PC and go to its IP configuration.

| PC | IP Address | Subnet Mask |
|----|-----------|-------------|
| PC0 | 172.16.0.1 | 255.255.255.0 |
| PC1 | 172.16.0.2 | 255.255.255.0 |
| PC2 | 172.16.0.3 | 255.255.255.0 |
| PC3 | 172.16.0.4 | 255.255.255.0 |

*(Unique IP addresses in the same subnet are required).*

#### Step 6 – Verify Using Ping
Open **PC0 → Desktop → Command Prompt** and run:
```
ping 172.16.0.2
ping 172.16.0.3
ping 172.16.0.4
```
If you receive replies, the ring is communicating correctly. Repeat the ping test from other PCs if required.

#### Step 7 – Use Simple PDU
1. Select **Add Simple PDU**.
2. Click source PC.
3. Click destination PC.
4. Observe the packet travelling through the ring.

---

## ✅ RESULT
Star and Ring network topologies were successfully studied and configured in Cisco Packet Tracer.

---
[← Practical 3](practical3.md) | [Back to Home](README.md) | [Next → Practical 5](practical5.md)
