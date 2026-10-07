# Practical 3 – Bus and Mesh Topologies in Cisco Packet Tracer

[← Back to Home](README.md)

---

## 🎯 AIM
Study and Configure Bus and Mesh Network Topologies in Cisco Packet Tracer.

---

## PART A – BUS TOPOLOGY

### What is Bus Topology?
In a bus topology, devices communicate through a common communication path. In this Packet Tracer implementation, switches are connected in a linear chain to simulate the bus.

---

### 🔧 Steps

#### Step 1 – Open Packet Tracer
1. Open **Cisco Packet Tracer**
2. Create a **New Project** (File → New)

#### Step 2 – Add Switches
From the bottom-left device panel:
1. Go to **Networking Devices → Switches**
2. Place **3 switches** on the workspace:

```
Switch0     Switch1     Switch2
```

#### Step 3 – Add PCs
1. Go to **End Devices → PC**
2. Place **3 PCs** corresponding to the switches:

```
PC0         PC1         PC2
```

#### Step 4 – Connect each PC to its switch
1. Click **Connections** (⚡) → **Copper Straight-Through**
2. Connect each PC to its respective switch:
   - Click **PC0** → select `FastEthernet0`
   - Click **Switch0** → select an available `FastEthernet` port
   - Repeat for **PC1 → Switch1** and **PC2 → Switch2**

#### Step 5 – Connect the switches in a line
Now connect the switches together to form the bus backbone.
1. Select **Connections** (⚡) → **Copper Crossover**
2. Connect:
   - **Switch0 ───── Switch1**
   - **Switch1 ───── Switch2**

So the complete topology becomes:
```
PC0          PC1          PC2
 |            |            |
Switch0 ─── Switch1 ─── Switch2
```

#### Step 6 – Configure IP addresses
Every PC needs a unique IP address with the same subnet mask.

| Device | IP Address | Subnet Mask |
|--------|-----------|-------------|
| PC0 | 192.168.0.1 | 255.255.255.0 |
| PC1 | 192.168.0.2 | 255.255.255.0 |
| PC2 | 192.168.0.3 | 255.255.255.0 |

*(Double-click PC → Desktop → IP Configuration)*

#### Step 7 – Verify using Ping
1. Open **PC0 → Desktop → Command Prompt**
2. Type:
   ```
   ping 192.168.0.2
   ping 192.168.0.3
   ```
> ✅ If you get `Reply from 192.168.0.2`, the connection is working.

#### Step 8 – Verify using Simple PDU
You can also demonstrate packet transmission visually:
1. Select the **Add Simple PDU** icon (closed envelope icon on the right menu)
2. Click the **source PC** (e.g., PC0)
3. Click the **destination PC** (e.g., PC2)
4. Observe the packet movement through the topology in Simulation Mode.

---

## PART B – MESH TOPOLOGY

### What is Mesh Topology?
In a mesh topology, devices have multiple direct connections, creating redundant paths. This provides better fault tolerance because data can use another path if one path fails.

---

### 🔧 Steps

#### Step 1 – Create a new project
Go to **File → New** to create a blank Packet Tracer project.

#### Step 2 – Add 4 PCs
Go to **End Devices → PC** and place 4 PCs:
```
PC0
PC1
PC2
PC3
```

#### Step 3 – Add 4 Switches
Go to **Networking Devices → Switches** and place 4 switches:
```
Switch0
Switch1
Switch2
Switch3
```

#### Step 4 – Connect PCs to switches
Each PC must be connected to **all four switches** using Ethernet cables.
For each PC:
1. Click the PC → select an available port.
2. Select the switch → select an available port.
3. Repeat until the PC is connected to all four switches.

Conceptually for PC0:
```
PC0 ── Switch0
  ├── Switch1
  ├── Switch2
  └── Switch3
```
*(Do the same for PC1, PC2 and PC3)*

#### Step 5 – Connect switches to each other
Now connect every switch to the other three switches.

Conceptually:
```
       Switch0
      /   |   \
     /    |    \
Switch1 ───── Switch2
     \    |    /
      \   |   /
       Switch3
```
This creates the multiple paths required for the mesh topology.

#### Step 6 – Configure IP addresses
For each PC, double-click → Desktop → IP Configuration:

| PC | IP Address | Subnet Mask |
|----|-----------|-------------|
| PC0 | 192.168.0.1 | 255.255.255.0 |
| PC1 | 192.168.0.2 | 255.255.255.0 |
| PC2 | 192.168.0.3 | 255.255.255.0 |
| PC3 | 192.168.0.4 | 255.255.255.0 |

#### Step 7 – Test the Mesh Network
Open **PC0 → Desktop → Command Prompt** and run:
```
ping 192.168.0.2
ping 192.168.0.3
ping 192.168.0.4
```
> ✅ You should receive replies from all PCs.

#### Step 8 – Use Simple PDU
1. Select **Simple PDU** (envelope icon)
2. Click the source PC and then the destination PC
3. Switch to Simulation mode and observe the packet travelling through the mesh network's redundant paths.

---

## ✅ RESULT
Bus and Mesh network topologies were successfully studied and configured in Cisco Packet Tracer.

---
[← Practical 2](practical2.md) | [Back to Home](README.md) | [Next → Practical 4](practical4.md)
