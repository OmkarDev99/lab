# 🌐 Computer Networks Lab – Practicals 1 to 10

> **How to use on college PC:**
> ```
> git clone https://github.com/OmkarDev99/lab.git
> cd lab
> ```
> Then open any `.md` file below.

---

## 📚 All Practicals

| No. | File | Topic |
|-----|------|-------|
| 01 | [practical1.md](practical1.md) | Study of Basic Networking Elements & Devices |
| 02 | [practical2.md](practical2.md) | LAN using Hub & Switch |
| 03 | [practical3.md](practical3.md) | Bus & Mesh Topologies |
| 04 | [practical4.md](practical4.md) | Star & Ring Topologies |
| 05 | [practical5.md](practical5.md) | Two LANs Connected via Router |
| 06 | [practical6.md](practical6.md) | DHCP Server & DNS Server |
| 07 | [practical7.md](practical7.md) | Sliding Window – Go-Back-N & Selective Repeat |
| 08 | [practical8.md](practical8.md) | Static Routing |
| 09 | [practical9.md](practical9.md) | RIP v2 Dynamic Routing |
| 10 | [practical10.md](practical10.md) | HTTP, TCP & ICMP using Wireshark |

---

## ⚠️ Important Notes

- Use **Copper Straight-Through** cable for PC → Switch / Router connections
- Router interfaces are **OFF by default** → always use `no shutdown`
- Default subnet mask: **255.255.255.0** unless stated otherwise
- Test connectivity with: `ping <destination-IP>`

---

## ⚡ Quick Command Cheat Sheet

```
# Router basic config
enable
configure terminal
interface gigabitEthernet 0/0
ip address <IP> <MASK>
no shutdown
exit
end

# View interfaces
show ip interface brief

# View routing table
show ip route

# Static route
ip route <DESTINATION> <MASK> <NEXT-HOP>

# RIP v2
router rip
version 2
no auto-summary
network <NETWORK>

# Test connectivity
ping <IP>

# PC IP info
ipconfig
```
