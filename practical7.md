# Practical 7 – Sliding Window Protocols (Go-Back-N & Selective Repeat)

[← Back to Home](README.md)

---

## 🎯 AIM
To implement Go-Back-N and Selective Repeat sliding window ARQ protocols using a programming language of your choice.

> **Note:** This practical is different from Practicals 1–6. It is **not** done in Cisco Packet Tracer. The manual asks you to implement these protocols programmatically (e.g., using Python, C++, Java).

---

## 1. Understand What You Have to Implement

You need to write programs for two protocols:

### A. Go-Back-N (GBN)
Suppose the sender sends:
`Frame 1 → Frame 2 → Frame 3 → Frame 4`

If Frame 3 is lost/corrupted, the receiver **does not accept it** (or any subsequent frames) and the sender eventually retransmits the required frame **and the subsequent frames**.

**Manual Specifications:**
- Receiver buffer size = 1
- Sender has a predefined buffer/window size.
- If a frame is corrupted, the receiver cancels/discards it.
- If the ACK timer expires, retransmission occurs.

### B. Selective Repeat (SR)
Suppose the sender sends:
`Frame 1 → Frame 2 → Frame 3 → Frame 4`
*(Suppose Frame 3 is lost ❌)*

If Frame 3 is corrupted/lost:
**Retransmit ONLY Frame 3.**

Frames received correctly after it (like Frame 4) can be acknowledged and buffered by the receiver.

**Manual Specifications:**
- Sender and receiver window sizes are the **same**.
- Selective Repeat saves bandwidth compared to Go-Back-N.

---

## 2. What You Need for the Practical

Since the manual says "using a programming language of your choice", you can use a language like **Python**. You do not need Packet Tracer for this practical. The procedure is simply to implement both protocols programmatically to demonstrate the logic.

---

## 3. Go-Back-N — How to Perform It

For your practical, think of the program as having two sides: SENDER and RECEIVER.

### Step 1 – Start the program
Create your code file, for example: `go_back_n.py`

### Step 2 – Take input
Your program should ask for:
- Number of frames
- Window size
- Which frame should be considered lost/corrupted

*Example:*
```
Number of frames: 6
Window size: 3
Lost frame: 3
```

### Step 3 – Create the sender window
If window size = 3, the sender window starts as:
`[1] [2] [3]`

The sender can initially send these frames.
After successful acknowledgements, the window slides:
`[2] [3] [4]` → `[3] [4] [5]` and so on.

### Step 4 – Send frames
The program prints:
```
Sending Frame 1
Sending Frame 2
Sending Frame 3
```
If Frame 3 is designated as lost: `Frame 3 lost/corrupted`

### Step 5 – Receiver checks the frame
For Go-Back-N, the receiver expects frames **in strict order**.
*Example:*
- Expected: Frame 3
- Received: Frame 4
*(Frame 4 is discarded/not accepted because Frame 3 is missing).*

### Step 6 – Retransmit (The "Go-Back" part)
When the sender does not receive the required acknowledgement before timeout, it goes back and retransmits the required frame **and all subsequent frames** that were in the window.

*Example:*
```
Frame 3 lost
Retransmitting:
Frame 3
Frame 4
Frame 5
```

### Step 7 – Continue until all frames are transmitted
Finally, the program finishes when all frames are acknowledged:
```
Frame 1 → ACK
Frame 2 → ACK
Frame 3 → ACK
Frame 4 → ACK
Frame 5 → ACK
Frame 6 → ACK
```

---

## 4. Selective Repeat — How to Perform It

Create another program, for example: `selective_repeat.py`

### Step 1 – Take input
*Example:*
```
Number of frames: 6
Window size: 3
Lost frame: 3
```

### Step 2 – Send the window
```
Sending Frame 1
Sending Frame 2
Sending Frame 3
```
*(Suppose Frame 3 is lost).*

### Step 3 – Receiver handles the error
Unlike Go-Back-N, the receiver **can** accept later correctly received frames and buffer them.
*Example:*
```
Frame 1 → ACK
Frame 2 → ACK
Frame 3 → LOST
Frame 4 → received and buffered
```

### Step 4 – Retransmit ONLY the missing frame
Instead of retransmitting 3, 4, and 5, Selective Repeat retransmits:
`Frame 3`

### Step 5 – Acknowledge the retransmitted frame
Once Frame 3 is finally received:
`Frame 3 → ACK`

The receiver can now process the buffered frames (like Frame 4) in sequence.

### Step 6 – Continue sliding the window
The window keeps moving until all frames are successfully delivered.

---

## ✅ RESULT
The concepts of Go-Back-N and Selective Repeat sliding window protocols were studied, and their transmission/retransmission logic was implemented programmatically.

---
[← Practical 6](practical6.md) | [Back to Home](README.md) | [Next → Practical 8](practical8.md)
