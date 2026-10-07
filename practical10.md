# Practical 10 – HTTP, TCP and ICMP using Wireshark

[← Back to Home](README.md)

---

## 🎯 AIM
To capture and analyze HTTP, TCP and ICMP packets using Wireshark.

> **⚠️ Requirement:** Wireshark must be installed on the computer and the correct **network interface** must be selected before starting a capture.

---

## PART A – ICMP (Ping Packets)

### Steps

1. Open **Wireshark**
2. Select the **active network interface** (e.g. Ethernet, Wi-Fi)
3. Click **Start Capture** (blue shark-fin button ▶)
4. Open **Command Prompt**
5. Run:
   ```
   ping 8.8.8.8
   ```
   *(If no Internet: ping another device on your LAN)*
6. Click **Stop Capture** (red square ■)
7. In the filter bar, type:
   ```
   icmp
   ```
   and press Enter
8. Observe **Echo Request** and **Echo Reply** packets
9. Click on a packet to inspect details

### What to Observe

| Field | Description |
|-------|-------------|
| Type 8 | Echo Request — sent by the pinging host |
| Type 0 | Echo Reply — sent by the target host |
| Source IP | Your machine's IP address |
| Destination IP | Target IP (e.g. 8.8.8.8) |
| TTL | Time To Live — decremented at each hop |

---

## PART B – TCP (Three-Way Handshake)

### What is the TCP Three-Way Handshake?
```
Client                        Server
  |                              |
  |-------- SYN ---------------→|   Step 1: Client requests connection
  |                              |
  |←------- SYN-ACK ------------|   Step 2: Server acknowledges + requests
  |                              |
  |-------- ACK ---------------→|   Step 3: Client confirms
  |                              |
  |      Connection Established  |
```

### Steps

1. Start a **new Wireshark capture**
2. Open a browser and visit any website (or run any TCP application)
3. Click **Stop Capture**
4. Apply display filter:
   ```
   tcp
   ```
5. Look for packets with flags:
   - `[SYN]` — connection request
   - `[SYN, ACK]` — connection accepted
   - `[ACK]` — connection confirmed
6. Right-click a packet → **Follow → TCP Stream** to see the full session

### Useful TCP Filters

```
tcp                                  → all TCP packets
tcp.flags.syn == 1                   → only SYN packets
tcp.flags.ack == 1 && tcp.flags.syn == 1  → SYN-ACK packets
```

### TCP Packet Fields to Note

| Field | Description |
|-------|-------------|
| Source Port | Client's port number |
| Destination Port | Server's port (80 for HTTP, 443 for HTTPS) |
| Sequence Number | Tracks order of bytes sent |
| Acknowledgement No. | Next byte expected |
| Flags | SYN, ACK, FIN, RST |

---

## PART C – HTTP (Web Traffic)

> **⚠️ Important:** Most modern websites use **HTTPS** (TLS encrypted). The `http` filter will show nothing for HTTPS sites. Use a plain HTTP lab server or type `http://` explicitly.

### Steps

1. Start a **Wireshark capture**
2. Visit an HTTP (not HTTPS) website in your browser
3. Click **Stop Capture**
4. Apply display filter:
   ```
   http
   ```
5. Inspect **HTTP Request** and **HTTP Response** packets

### HTTP Request Fields

| Field | Description |
|-------|-------------|
| Method | GET / POST / PUT / DELETE |
| Host | Target domain name |
| User-Agent | Browser / client identifier |
| Source IP | Client IP address |
| Destination Port | Port **80** (HTTP) |

### HTTP Response Fields

| Field | Description |
|-------|-------------|
| Status Code | 200 OK / 404 Not Found / 301 Redirect |
| Content-Type | text/html / application/json |
| Source IP | Server IP address |
| Source Port | Port **80** (server side) |

### Useful HTTP Filters

```
http               → all HTTP packets
http.request       → only HTTP requests
http.response      → only HTTP responses
```

---

## 🔑 SUMMARY – Protocol Filters

| Protocol | Wireshark Filter | Port |
|----------|-----------------|------|
| ICMP (Ping) | `icmp` | — |
| TCP | `tcp` | Various |
| HTTP | `http` | 80 |
| HTTPS | `tls` | 443 |
| DNS | `dns` | 53 |

---

## ✅ RESULT
HTTP, TCP and ICMP packets were captured and analyzed using Wireshark.

---
[← Practical 9](practical9.md) | [Back to Home](README.md)
