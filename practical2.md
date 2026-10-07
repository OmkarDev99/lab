# Practical 2 – Cisco Packet Tracer + LAN using Hub and Switch

[← Back to Home](README.md)

---

## 🎯 AIM
**(a)** Introduction to the network simulator tool, Cisco Packet Tracer
**(b)** Simulate LAN using Hub and Switch using Cisco Packet Tracer

---

## PART A – Introduction to Cisco Packet Tracer

---

### STEP 1 – Open Cisco Packet Tracer

1. Open **Cisco Packet Tracer**
2. Click **File → New**
3. A blank workspace will appear

---

### STEP 2 – Understand the Packet Tracer Screen

At the **bottom-left** side of the screen, you will see device categories:

| Category | Contains |
|----------|----------|
| **Networking Devices** | Routers, Switches, Hubs, Access Points |
| **End Devices** | PCs, Laptops, Servers, Printers |
| **Components** | Modules, interface cards |
| **Connections** | All cable types (Straight-Through, Crossover, Serial, etc.) |
| **Miscellaneous** | Clouds, notes |
| **Multiuser** | WAN emulation |

---

### STEP 3 – Add Devices

To add a device to the workspace:

1. Select the required **category** from the bottom panel
2. Select the **device** from the sub-panel
3. Click on the **blank workspace** where you want to place it

Examples:
```
End Devices       → PC
Networking Devices → Switch
Networking Devices → Router
```

Repeat the process to place multiple devices.

---

### STEP 4 – Connect Devices

1. Click the **Connections** icon (⚡ lightning bolt)
2. Select the required **cable type**
3. Click the **first device** → select its **interface/port**
4. Click the **second device** → select its **interface/port**
5. The connection line will appear between the two devices

---

### STEP 5 – Configure a Device

1. **Double-click** the device
2. A configuration window will open
3. Depending on the device, you can configure:
   - IP address
   - Subnet mask
   - Default gateway
   - Routing settings
   - Other network parameters

---

### STEP 6 – Test the Network

After configuring devices:

1. Double-click a **PC**
2. Go to **Desktop**
3. Open **Command Prompt**
4. Type:
   ```
   ping <destination-IP>
   ```
   For example:
   ```
   ping 192.168.1.2
   ```
5. If you receive **"Reply from…"** messages → devices can communicate ✅

---

### STEP 7 – Save the Project

```
File → Save As
```

Give your project a suitable name and save it.

---

## PART B – Simulate LAN using SWITCH

---

### STEP 1 – Place Devices

From the device panel, place:
- **3 × PC** (PC0, PC1, PC2)
- **1 × Switch** (2960-24TT)

```
   PC0
    |
   PC1 ──── Switch
    |
   PC2
```

---

### STEP 2 – Connect PCs to Switch

1. Click **Connections** (⚡)
2. Select **Copper Straight-Through**
3. Click **PC0** → select **FastEthernet0**
4. Click **Switch** → select an available **FastEthernet** port
5. Repeat for **PC1** and **PC2**

Result:
```
PC0 ─────┐
PC1 ─────┼──── Switch
PC2 ─────┘
```

---

### STEP 3 – Configure IP Addresses

For each PC: Double-click → **Desktop** → **IP Configuration** → **Static**

| Device | IP Address | Subnet Mask | Gateway |
|--------|-----------|-------------|---------|
| PC0 | 192.168.1.1 | 255.255.255.0 | — |
| PC1 | 192.168.1.2 | 255.255.255.0 | — |
| PC2 | 192.168.1.3 | 255.255.255.0 | — |

> No default gateway needed for this simple single LAN.

---

### STEP 4 – Test Connectivity

On **PC0** → Desktop → Command Prompt:

```
ping 192.168.1.2
ping 192.168.1.3
```

> ✅ You should receive **"Reply from…"** messages.
> This means: **PC0 → Switch → PC1 / PC2** is working correctly.

---

## PART C – Simulate LAN using HUB

---

### STEP 1 – Remove the Switch

Either:
- **Delete** the switch from the existing project, OR
- Create a **new Packet Tracer project** (File → New)

---

### STEP 2 – Add Devices

Place the following devices:
- **3 × PC** (PC0, PC1, PC2)
- **1 × Hub** (found under: **Network Devices → Hubs → Hub-PT**)

```
   PC0
    |
   PC1 ──── Hub
    |
   PC2
```

---

### STEP 3 – Connect PCs to Hub

1. Click **Connections** (⚡)
2. Select **Copper Straight-Through**
3. Connect each PC to an available port on the Hub:

```
PC0 ─────┐
PC1 ─────┼──── Hub
PC2 ─────┘
```

---

### STEP 4 – Configure IP Addresses

Use the **same IP addresses** as Part B:

| Device | IP Address | Subnet Mask |
|--------|-----------|-------------|
| PC0 | 192.168.1.1 | 255.255.255.0 |
| PC1 | 192.168.1.2 | 255.255.255.0 |
| PC2 | 192.168.1.3 | 255.255.255.0 |

---

### STEP 5 – Test Using Ping

From **PC0** → Desktop → Command Prompt:

```
ping 192.168.1.2
ping 192.168.1.3
```

> ✅ If you get replies, the Hub-based LAN is working correctly.

---

## 🔑 KEY DIFFERENCE – Hub vs Switch

| Feature | Hub | Switch |
|---------|-----|--------|
| How it forwards data | Sends to **all** ports (broadcast) | Sends to the **correct** port only |
| Layer | Layer 1 (Physical) | Layer 2 (Data Link) |
| Collision Domain | One shared domain | Each port = separate domain |
| Efficiency | Low | High |
| Intelligence | None | Maintains MAC address table |

---

## ✅ RESULT
Cisco Packet Tracer was introduced and explored. LAN was successfully simulated using both a **Switch** (Part B) and a **Hub** (Part C). Connectivity was verified using the **ping** command.

---
[← Practical 1](practical1.md) | [Back to Home](README.md) | [Next → Practical 3](practical3.md)
