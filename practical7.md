# Practical 7 – Sliding Window Protocol – Go-Back-N and Selective Repeat

[← Back to Home](README.md)

---

## 🎯 AIM
To study and simulate Go-Back-N (GBN) and Selective Repeat (SR) sliding window ARQ protocols and analyze their retransmission behavior.

> **Note:** This practical is implemented using a programming/simulation environment — not standard Packet Tracer.

---

## 📖 BACKGROUND

### What is a Sliding Window Protocol?
- Allows the sender to transmit **multiple frames** before needing an acknowledgement
- **Window Size** = maximum number of unacknowledged frames in transit
- Used to improve **efficiency** over simple Stop-and-Wait ARQ

---

## PART A – GO-BACK-N (GBN)

### Concept
- Sender transmits frames within the window size
- If one frame is **lost or errored**, the sender retransmits that frame **AND ALL FRAMES AFTER IT**
- Receiver **discards** out-of-order frames

### Diagram
```
Sender Window (W = 4):

[F0 ✓] [F1 ✓] [F2 ✗LOST] [F3] [F4] [F5]
                    ↓
         F2 lost → Retransmit F2, F3, F4, F5
```

### Implementation Plan

1. Define:
   - Total number of frames to send
   - Window size (e.g. W = 4)
   - Which frame will be lost/errored
2. Sender transmits frames inside the window
3. Simulate error/loss at the specified frame
4. Receiver detects missing frame (sequence number gap)
5. Sender retransmits **the missing frame AND all subsequent frames**
6. Display ACK numbers and retransmission events
7. Continue until all frames are acknowledged

### Key Formula
```
Sender window size  =  2^n - 1   (where n = number of sequence bits)
```

---

## PART B – SELECTIVE REPEAT (SR)

### Concept
- Receiver **buffers** correctly received out-of-order frames
- Sender retransmits **ONLY** the lost or errored frame
- More efficient than Go-Back-N

### Diagram
```
Sender Window (W = 4):

[F0 ✓] [F1 ✓] [F2 ✗LOST] [F3 📦buffered] [F4 📦buffered]
                    ↓
         Only F2 is retransmitted → F3, F4 already buffered
```

### Implementation Plan

1. Define window size, total frames, and which frame will be lost
2. Sender transmits frames within the window
3. Simulate loss of one specific frame
4. Receiver stores correctly-received out-of-order frames in a **buffer**
5. Receiver sends **individual ACKs** for every correctly received frame
6. Sender retransmits **only the missing frame**
7. Receiver delivers all frames in order after the gap is filled
8. Display buffer state, ACKs, and retransmissions

### Key Formula
```
Sender window size  =  2^(n-1)   (where n = number of sequence bits)
```

---

## ⚖️ KEY DIFFERENCES: Go-Back-N vs Selective Repeat

| Feature | Go-Back-N | Selective Repeat |
|---------|-----------|-----------------|
| Retransmission | Lost frame + **all** following frames | **Only** the lost frame |
| Receiver Buffer | **Not required** (discards out-of-order) | **Required** (buffers out-of-order) |
| Efficiency | Lower (more retransmissions) | Higher (fewer retransmissions) |
| Complexity | Simpler | More complex |
| Sender Window | 2ⁿ – 1 | 2ⁿ⁻¹ |
| ACK Type | Cumulative ACK | Individual ACK per frame |

---

## 🔑 KEY POINTS
- **Window Size** controls how many frames can be sent without an ACK
- Larger window → better throughput (but more memory needed)
- GBN → easier to implement, wastes bandwidth on errors
- SR → better bandwidth efficiency, needs receiver buffer

---

## ✅ RESULT
Go-Back-N and Selective Repeat sliding-window mechanisms were studied and their retransmission behavior was analyzed.

---
[← Practical 6](practical6.md) | [Back to Home](README.md) | [Next → Practical 8](practical8.md)
