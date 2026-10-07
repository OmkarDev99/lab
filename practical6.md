# Practical 6 – DHCP Server & DNS Server in Cisco Packet Tracer

[← Back to Home](README.md)

---

## 🎯 AIM
Configure DHCP Server, DNS Server, and Web Server across different networks in Cisco Packet Tracer.

This practical has three parts:
- **A)** Configure DHCP Server
- **B)** Configure DNS Server
- **C)** Configure Web Server

---

## PART A – DHCP Server

### 🔧 Steps

#### Step 1: Create the topology
Open **Cisco Packet Tracer → New**.
Place the following devices:
- **Network 1:** 3 PCs, 1 Switch
- **Network 2:** 1 PC, 1 Switch
- **Server Network:** 1 Web Server, 1 DNS Server, 1 DHCP Server, 1 Switch
- **Central Device:** 1 Router

#### Step 2: Connect the devices
Use **Copper Straight-Through Ethernet cables** where appropriate.

**Network 1:**
```
PC-A1 ─┐
PC-A2 ─┼── Switch-N1 ─── Router
PC-A3 ─┘
```
**Network 2:**
```
PC ─── Switch-N2 ─── Router
```
**Server Section:**
```
DHCP Server ─┐
DNS Server  ─┼── Switch-Servers ─── Router
Web Server  ─┘
```

#### Step 3: Configure the Router
Click **Router → Config**.

**FastEthernet0/0 (Gateway for Network 1):**
- **IP Address:** `192.168.1.1`
- **Subnet Mask:** `255.255.255.0`
- Turn Port Status **On**.

**FastEthernet0/1 (Gateway for Network 2):**
- **IP Address:** `192.168.2.1`
- **Subnet Mask:** `255.255.255.0`
- Turn Port Status **On**.

#### Step 4: Configure DHCP Server IP
Click **Server-DHCP → Desktop → IP Configuration**.
Enter:
- **IP Address:** `192.168.10.8`
- **Subnet Mask:** `255.255.255.0`
- **Default Gateway:** `192.168.10.7`
- **DNS Server:** `192.168.10.10`

#### Step 5: Create DHCP Pool for Network 1
Click **Server-DHCP → Services → DHCP**.
Create the first pool:
- **Pool Name:** `Network1Pool`
- **Default Gateway:** `192.168.1.1`
- **Start IP Address:** `192.168.1.10`
- **Subnet Mask:** `255.255.255.0`
- **Maximum Number of Users:** `50`
- Click **Add** / **Save**.

#### Step 6: Create DHCP Pool for Network 2
Create another pool:
- **Pool Name:** `Network2Pool`
- **Default Gateway:** `192.168.2.1`
- **Start IP Address:** `192.168.2.10`
- **Subnet Mask:** `255.255.255.0`
- **Maximum Number of Users:** `30`
- Click **Add** / **Save**.

#### Step 7: Configure DHCP Relay
Because the DHCP server is on another network, the router must forward DHCP requests using a DHCP helper address.
Click **Router → CLI** and enter:
```
enable
configure terminal
interface FastEthernet0/0
ip helper-address 192.168.19.8
end
```
> **⚠️ Important Note:** The manual gives `192.168.19.8` for the helper address in this specific step, even though the DHCP server IP was set to `192.168.10.8` earlier. Use the exact command specified in your manual.

#### Step 8: Test DHCP
1. Click **PC-A1 → Desktop → IP Configuration**.
2. Select **DHCP**.
3. The PC should automatically receive an IP address from the DHCP pool (e.g., `192.168.1.10`, `192.168.1.11`, etc.).

---

## PART B – DNS Server

### 🔧 Steps

#### Step 9: Configure DNS Server IP
Click **Server-DNS → Desktop → IP Configuration**.
Enter:
- **IP Address:** `192.168.10.10`
- **Subnet Mask:** `255.255.255.0`
- **Default Gateway:** `192.168.10.7`

#### Step 10: Create DNS Record
Go to **Server-DNS → Services → DNS**. Turn the service **On**.
Create a DNS record:
- **Name:** `krithikaa.com`
- **Type:** A Record
- **Address:** `192.168.1.3`
- Click **Add**.

*(This maps the domain `krithikaa.com` to the IP `192.168.1.3`)*

#### Step 11: Test DNS
Go to a PC (e.g., PC-A1) → **Desktop → Command Prompt**.
Type:
```
ping krithikaa.com
```
> ✅ If DNS is working, Packet Tracer should resolve `krithikaa.com` to `192.168.1.3` and attempt to ping it.

---

## PART C – Web Server

### 🔧 Steps

#### Step 12: Configure Web Server IP
Click **Server-Web → Desktop → IP Configuration**.
Enter:
- **IP Address:** `192.168.10.6`
- **Subnet Mask:** `255.255.255.0`
- **Default Gateway:** `192.168.10.7`
- **DNS Server:** `192.168.10.10`

#### Step 13: Enable HTTP
1. Go to **Server-Web → Services → HTTP**.
2. Make sure **HTTP** and **HTTPS** are **On**.
3. Click **Edit** next to `index.html` and modify the web page content if desired, then click **Save**.

#### Step 14: Create DNS record for Web Server
Go back to **Server-DNS → Services → DNS**.
Create another record:
- **Name:** `mywebsite.com`
- **Address:** `192.168.10.6`
- Click **Add**.

*(This maps `mywebsite.com` to the Web Server's IP)*

#### Step 15: Test the Website
1. Go to a PC → **Desktop → Web Browser**.
2. Enter the URL:
   ```
   http://mywebsite.com
   ```
3. Press **Go**.

> ✅ If configured correctly, the webpage hosted on `192.168.10.6` will appear in the browser.

---

## ✅ RESULT
DHCP, DNS, and Web Servers were successfully configured and verified across different networks using Cisco Packet Tracer.

---
[← Practical 5](practical5.md) | [Back to Home](README.md) | [Next → Practical 7](practical7.md)
