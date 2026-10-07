# Practical 1 – Study of Basic Network Commands

[← Back to Home](README.md)

---

## 🎯 AIM
To study and execute basic network commands using Windows Command Prompt and observe their output.

---

## 🖥️ STEP 1 – Open Command Prompt

Press **Windows + R** → type `cmd` → press **Enter**

---

## 📋 STEP 2 – ipconfig

```
ipconfig
```

### What it does
Displays the basic IP configuration of your computer.

### Output you will see
| Field | Description |
|-------|-------------|
| IPv4 Address | Your computer's IP address |
| Subnet Mask | Network mask (e.g. 255.255.255.0) |
| Default Gateway | Router's IP address |

---

## 📋 STEP 3 – ipconfig /all

```
ipconfig /all
```

### What it does
Displays **detailed** network configuration of all interfaces.

### Extra info compared to `ipconfig`
| Field | Description |
|-------|-------------|
| IPv4 Address | Your computer's IP address |
| Subnet Mask | Network mask |
| Default Gateway | Router's IP address |
| DNS Server | DNS server IP address |
| Physical Address | MAC address (e.g. A1-B2-C3-D4-E5-F6) |
| DHCP Enabled | Whether IP was assigned automatically |
| DHCP Server | IP of the DHCP server |

---

## 📋 STEP 4 – ping

```
ping google.com
```

Or use an IP directly:
```
ping 8.8.8.8
```

### What it does
Checks whether your computer can **communicate** with the destination.
Sends **ICMP Echo Request** packets and waits for **Echo Reply**.

### Output you will see
```
Reply from 142.250.x.x: bytes=32 time=14ms TTL=115
```

### Key Fields
| Field | Description |
|-------|-------------|
| Reply from | IP that responded |
| bytes | Size of the packet |
| time | Round-trip time in milliseconds |
| TTL | Time To Live — hops remaining |

---

## 📋 STEP 5 – tracert

```
tracert google.com
```

### What it does
Shows the **path (hops)** taken by packets from your computer to the destination.
Each line = one router/hop along the route.

### Output you will see
```
1    1 ms    1 ms    1 ms   192.168.1.1       ← Your gateway
2    8 ms    7 ms    8 ms   10.x.x.x          ← ISP router
3   12 ms   11 ms   12 ms   ...
...
```

### Key Fields
| Field | Description |
|-------|-------------|
| Hop number | Count of routers crossed |
| Time (3 values) | Round-trip time for 3 test packets |
| IP / Hostname | Address of that hop |

---

## 📋 STEP 6 – nslookup

```
nslookup google.com
```

### What it does
Checks **DNS name resolution** — converts a domain name into its IP address.

### Output you will see
```
Server:  dns.example.com
Address: 192.168.1.1

Non-authoritative answer:
Name:    google.com
Address: 142.250.x.x
```

### Key Fields
| Field | Description |
|-------|-------------|
| Server | Your DNS server |
| Address | IP of your DNS server |
| Name | Domain name queried |
| Address (bottom) | Resolved IP address of the domain |

---

## 📋 STEP 7 – netstat

```
netstat
```

For more detailed output:
```
netstat -an
```

### What it does
Shows **current active network connections** on your computer.

### Key Fields you will observe
| Field | Description |
|-------|-------------|
| Proto | Protocol used (TCP / UDP) |
| Local Address | Your computer's IP and port |
| Foreign Address | Remote server's IP and port |
| State | Connection state (ESTABLISHED, LISTENING, etc.) |

### Common States
| State | Meaning |
|-------|---------|
| ESTABLISHED | Active connection |
| LISTENING | Port open, waiting for connection |
| TIME_WAIT | Connection closing |
| CLOSE_WAIT | Remote end closed connection |

---

## 📋 STEP 8 – arp -a

```
arp -a
```

### What it does
Displays the **ARP (Address Resolution Protocol) table** — mappings between IP addresses and MAC addresses of devices your computer has recently communicated with.

### Output you will see
```
Interface: 192.168.1.5
  Internet Address    Physical Address      Type
  192.168.1.1         a1-b2-c3-d4-e5-f6    dynamic
  192.168.1.10        ff-aa-bb-cc-dd-ee     dynamic
```

### Key Fields
| Field | Description |
|-------|-------------|
| Internet Address | IP address of the device |
| Physical Address | MAC address of the device |
| Type | dynamic (learned) or static (manual) |

---

## 📋 STEP 9 – route print

```
route print
```

### What it does
Displays your computer's **routing table** — how your computer decides where to send packets.

### Key Columns
| Column | Description |
|--------|-------------|
| Network Destination | Target network address |
| Netmask | Subnet mask for that network |
| Gateway | Next-hop router to reach the destination |
| Interface | Your local NIC IP used to send packets |
| Metric | Cost of the route (lower = preferred) |

---

## 🗒️ COMMANDS SUMMARY

| Command | Purpose |
|---------|---------|
| `ipconfig` | Basic IP info — IP, Mask, Gateway |
| `ipconfig /all` | Detailed info — MAC, DNS, DHCP |
| `ping google.com` | Test connectivity (ICMP) |
| `ping 8.8.8.8` | Test connectivity using IP |
| `tracert google.com` | Show hops/path to destination |
| `nslookup google.com` | DNS name → IP resolution |
| `netstat` | Show active connections |
| `netstat -an` | Show all connections with ports |
| `arp -a` | Show IP → MAC mapping table |
| `route print` | Show computer's routing table |

---

## ✅ RESULT
Basic network commands were studied and executed using Windows Command Prompt. The output of each command was observed and analyzed.

---
[← Back to Home](README.md) | [Next → Practical 2](practical2.md)
