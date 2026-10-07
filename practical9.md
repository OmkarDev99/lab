# Practical 9 – RIP Routing in Cisco Packet Tracer

[← Back to Home](README.md)

---

## 🎯 AIM
Study and Configuration of **RIP** (Routing Information Protocol) using Cisco Packet Tracer.

**Objective:** Configure dynamic routing using RIP and verify communication between two different networks. 
> **Note:** RIP is a distance-vector routing protocol that uses hop count as its routing metric (AD 120), operating at the Network layer.

---

## 1. Create the Topology

### 🖥️ Devices Required
- **4 PCs**
- **2 Switches**
- **2 Routers**

### 🗺️ Network Topology
Arrange the devices as follows:
```
PC0 ──┐                                                 
      ├── Switch0 ── Router0 ═══ Router1 ── Switch1 ──┬── PC2
PC1 ──┘                                               └── PC3
```

### 🔗 Connect the Devices
Use the **Automatic Connecting Cable** (lightning bolt icon). Connect:
- PC0 → Switch0
- PC1 → Switch0
- Switch0 → Router0
- Router0 → Router1
- Router1 → Switch1
- Switch1 → PC2
- Switch1 → PC3

---

## 2. Configure the PCs

Go to **PC → Desktop → IP Configuration** and enter the following values exactly as specified:

| PC | IPv4 Address | Subnet Mask | Default Gateway |
|----|-------------|-------------|-----------------|
| PC0 | 192.168.10.2 | 255.255.255.0 | 192.168.10.1 |
| PC1 | 192.168.10.3 | 255.255.255.0 | 192.168.10.1 |
| PC2 | 192.168.20.2 | 255.255.255.0 | 192.168.20.1 |
| PC3 | 192.168.20.3 | 255.255.255.0 | 192.168.20.1 |

---

## 3. Configure the Routers

### Router0 Configuration
Click **Router0 → Config → Interfaces**.
Turn the ports **ON** and configure:

| Interface | IP Address | Subnet Mask |
|-----------|-----------|-------------|
| FastEthernet0/0 | 192.168.10.1 | 255.255.255.0 |
| Serial2/0 | 10.0.0.1 | 255.0.0.0 |

### Router1 Configuration
Click **Router1 → Config → Interfaces**.
Turn the ports **ON** and configure:

| Interface | IP Address | Subnet Mask |
|-----------|-----------|-------------|
| FastEthernet0/0 | 192.168.20.1 | 255.255.255.0 |
| Serial2/0 | 10.0.0.2 | 255.0.0.0 |

---

## 4. Configure RIP Protocol (Dynamic Routing)

This is the main part of Practical 9 where we configure the routers to dynamically learn routes.

### Configure RIP on Router0
1. Click **Router0 → CLI**.
2. Press Enter to get the prompt and type:
```
enable
configure terminal
router rip
network 192.168.10.0
network 10.0.0.0
exit
```

### Configure RIP on Router1
1. Click **Router1 → CLI**.
2. Press Enter and type:
```
enable
configure terminal
router rip
network 192.168.20.0
network 10.0.0.0
exit
```

---

## 5. Test the Network

Check whether RIP has successfully allowed communication between the two different networks.

From **PC0** (Network `192.168.10.0`):
1. Click **PC0 → Desktop → Command Prompt**.
2. Enter:
```
ping 192.168.20.2
```
> ✅ You should receive **`Reply from 192.168.20.2`**. This confirms that PC0 can communicate with PC2 via RIP routing.

You can also test:
```
ping 192.168.20.3
```

---

## 🛠️ Troubleshooting (If ping doesn't work)

Check these in this exact order:
1. **PC IP addresses:** Ensure they exactly match the table.
2. **PC Default Gateways:** PC0/PC1 should be `192.168.10.1`. PC2/PC3 should be `192.168.20.1`.
3. **Router0 FastEthernet0/0** is `192.168.10.1`.
4. **Router1 FastEthernet0/0** is `192.168.20.1`.
5. **Router-to-router serial IPs:** Router0 is `10.0.0.1`, Router1 is `10.0.0.2`.
6. **Interface Status:** Ensure ALL Router interfaces are turned **ON**.
7. **RIP Networks:** Check that the RIP networks are correctly entered:
   - **Router0:** `192.168.10.0` and `10.0.0.0`
   - **Router1:** `192.168.20.0` and `10.0.0.0`

---

## ✅ RESULT
Dynamic routing was successfully configured using RIP, and communication between two remote networks was verified.

---
[← Practical 8](practical8.md) | [Back to Home](README.md) | [Next → Practical 10](practical10.md)
