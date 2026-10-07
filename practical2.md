# Practical 2 – Introduction to Cisco Packet Tracer and LAN using Hub & Switch

[← Back to Home](README.md)

---

## 🎯 AIM
To simulate a LAN using a Hub and a Switch in Cisco Packet Tracer and verify connectivity using ping.

---

## PART A – LAN USING HUB

### 🖥️ Devices Required
- 3 × PC (PC0, PC1, PC2)
- 1 × Hub-PT
- Copper Straight-Through cables

### 📋 IP Configuration

| Device | IP Address | Subnet Mask | Gateway |
|--------|-----------|-------------|---------|
| PC0 | 192.168.1.1 | 255.255.255.0 | — |
| PC1 | 192.168.1.2 | 255.255.255.0 | — |
| PC2 | 192.168.1.3 | 255.255.255.0 | — |

### 🔧 Steps

1. Open **Cisco Packet Tracer**
2. Add **3 PCs**: PC0, PC1, PC2 from the End Devices panel
3. Add **Hub-PT** from the Network Devices panel
4. Click the **Connections** icon (⚡ lightning bolt) → select **Copper Straight-Through**
5. Connect the devices:
   ```
   PC0 FastEthernet0  →  Hub
   PC1 FastEthernet0  →  Hub
   PC2 FastEthernet0  →  Hub
   ```
6. For each PC: Click PC → **Desktop** → **IP Configuration** → Enter IP and Subnet Mask
7. Leave **Default Gateway empty**
8. On PC0 → Desktop → **Command Prompt**:
   ```
   ping 192.168.1.2
   ping 192.168.1.3
   ```
9. You should see **"Reply from..."** messages → connectivity confirmed ✅

---

## PART B – LAN USING SWITCH

### 🖥️ Devices Required
- 3 × PC (PC0, PC1, PC2)
- 1 × Switch **2960-24TT**
- Copper Straight-Through cables

### 📋 IP Configuration

| Device | IP Address | Switch Port | Subnet Mask |
|--------|-----------|-------------|-------------|
| PC0 | 192.168.2.1 | Fa0/1 | 255.255.255.0 |
| PC1 | 192.168.2.2 | Fa0/2 | 255.255.255.0 |
| PC2 | 192.168.2.3 | Fa0/3 | 255.255.255.0 |

### 🔧 Steps

1. Add **3 PCs** and a **2960-24TT switch** to the workspace
2. Select **Copper Straight-Through** cable
3. Connect the devices:
   ```
   PC0  →  Switch Fa0/1
   PC1  →  Switch Fa0/2
   PC2  →  Switch Fa0/3
   ```
4. Configure each PC with the IP addresses shown in the table above
5. From PC0 → Desktop → **Command Prompt**:
   ```
   ping 192.168.2.2
   ping 192.168.2.3
   ```
6. Successful replies confirm LAN connectivity through the switch ✅

---

## 🔑 KEY DIFFERENCE: Hub vs Switch

| Feature | Hub | Switch |
|---------|-----|--------|
| Data forwarding | Sends to **all** ports | Sends to **correct** port only |
| Layer | Layer 1 | Layer 2 |
| Collision Domain | One shared | Each port separate |
| Efficiency | Low | High |

---

## ✅ RESULT
LANs were successfully simulated using Hub and Switch. Connectivity was verified using ping.

---
[← Practical 1](practical1.md) | [Back to Home](README.md) | [Next → Practical 3](practical3.md)
