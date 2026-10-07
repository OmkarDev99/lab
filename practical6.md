# Practical 6 – DHCP Server and DNS Server

[← Back to Home](README.md)

---

## 🎯 AIM
To configure a DHCP server for automatic IP assignment and a DNS server for domain-name resolution in Cisco Packet Tracer.

---

## PART A – DHCP SERVER

### 🖥️ Devices Required
- 1 × Server (static IP)
- 1 × Switch 2960
- 3 × PC (will be DHCP clients)
- Copper Straight-Through cables

### 🗺️ Topology
```
PC0 ──┐
PC1 ──┼── Switch ── Server (192.168.5.2)
PC2 ──┘
```

### 🔧 Steps

#### Step 1 – Connect Devices
1. Add **3 PCs**, **1 Switch**, and **1 Server**
2. Connect all devices to the switch using **Straight-Through cables**

#### Step 2 – Set Server Static IP
1. Click **Server** → **Desktop** → **IP Configuration**
2. Enter:
   ```
   IP Address   : 192.168.5.2
   Subnet Mask  : 255.255.255.0
   Gateway      : (leave blank or 192.168.5.1)
   ```

#### Step 3 – Configure DHCP Service
1. Click **Server** → **Services** → **DHCP**
2. Turn DHCP service **ON**
3. Fill in the pool settings:

| Setting | Value |
|---------|-------|
| Pool Name | LAN |
| Default Gateway | 192.168.5.1 |
| DNS Server | 192.168.5.2 |
| Start IP Address | 192.168.5.10 |
| Subnet Mask | 255.255.255.0 |

4. Click **Add** / **Save**

#### Step 4 – Set PCs to DHCP
1. On each PC → **Desktop** → **IP Configuration**
2. Select **DHCP** (radio button)
3. Wait a few seconds — each PC automatically receives an IP

#### Step 5 – Verify
From any PC → Desktop → **Command Prompt**:
```
ipconfig
ping 192.168.5.2
```

> ✅ PCs should show an IP in the range **192.168.5.10+**

---

## PART B – DNS SERVER

### 🔧 Steps

#### Step 1 – Configure DNS Service
1. Use the **same Server** (IP: `192.168.5.2/24`)
2. Click **Server** → **Services** → **DNS**
3. Turn DNS service **ON**
4. Add an **A Record**:

| Field | Value |
|-------|-------|
| Name | www.example.com |
| Type | A Record |
| Address | 192.168.5.2 |

5. Click **Add**

#### Step 2 – Set DNS on PC
1. On the PC → **Desktop** → **IP Configuration**
2. Set **DNS Server** to: `192.168.5.2`

#### Step 3 – Test DNS Resolution
Open PC → Desktop → **Command Prompt**:
```
ping www.example.com
```

> ✅ The domain name should **resolve to 192.168.5.2** and replies should come back.

---

## 🔑 KEY POINTS

| Service | Purpose |
|---------|---------|
| **DHCP** | Automatically assigns IP, Mask, Gateway, DNS to clients |
| **DNS** | Translates domain names (www.example.com) into IP addresses |
| **Static IP** | Always give the server itself a fixed/static IP |

---

## ✅ RESULT
DHCP successfully assigned IP addresses automatically. DNS successfully resolved a domain name to an IP address.

---
[← Practical 5](practical5.md) | [Back to Home](README.md) | [Next → Practical 7](practical7.md)
