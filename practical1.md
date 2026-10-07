# Practical 1 – Study of Basic Elements of Computer Networking and Networking Devices

[← Back to Home](README.md)

---

## 🎯 AIM
To study the basic elements of computer networking and networking devices.

> **Note:** This is mainly a study/theory practical — no major configuration is required in Packet Tracer.

---

## 📖 STEP 1 – Basic Elements of a Network

| Element | Description |
|---------|-------------|
| **Sender** | The device that originates and transmits data |
| **Receiver** | The device that accepts and processes the data |
| **Transmission Medium** | The path data travels — copper cable, fibre optic, or wireless |
| **NIC** | Network Interface Card — connects a device to the network |
| **Protocol** | A set of rules that governs communication (e.g. TCP/IP, HTTP) |
| **IP Address** | Logical address used for routing (e.g. `192.168.1.1`) |
| **MAC Address** | Physical hardware address burned into the NIC (e.g. `AA:BB:CC:DD:EE:FF`) |

---

## 🖧 STEP 2 – Common Networking Devices

| Device | Function |
|--------|----------|
| **Hub** | Sends data to **all** ports (broadcasts) — Layer 1 |
| **Switch** | Forwards frames to the **correct** port using MAC table — Layer 2 |
| **Router** | Connects **different networks** using IP routing — Layer 3 |
| **Modem** | Converts digital ↔ analog signals for ISP connection |
| **Access Point** | Provides **wireless (Wi-Fi)** connectivity |
| **Repeater** | **Regenerates / extends** a signal over long distances |
| **Bridge** | Connects two LAN segments at the data-link layer |

---

## 💻 STEP 3 – Identify Devices in Cisco Packet Tracer

1. Open **Cisco Packet Tracer**
2. From the device panel at the bottom, identify:
   - **End Devices:** PC, Laptop, Server
   - **Network Devices:** Hub, Switch, Router
   - **Wireless Devices:** Access Point, Wireless Router
3. From the **Connections** panel, identify cable types:
   - Copper Straight-Through
   - Copper Crossover
   - Serial DCE / DTE
   - Fibre Optic
4. Hover over each device icon to read its name and description
5. Note: Router interfaces are **OFF by default** — always use `no shutdown`

---

## 🔑 KEY POINTS

```
Hub         = sends data to ALL ports (Layer 1 device)
Switch      = forwards frames to the correct port (Layer 2 device)
Router      = connects different networks via IP (Layer 3 device)
Access Point= provides wireless connectivity
Repeater    = regenerates / extends a signal
```

---

## ✅ RESULT
Basic networking elements and networking devices were studied successfully.

---
[← Back to Home](README.md) | [Next → Practical 2](practical2.md)
