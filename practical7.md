Practical number 07

import random
import time

def simulate_go_back_n(total_frames, window_size, loss_probability=0.2):
    print(f"\n==============================================")
    print(f"--- Starting Go-Back-N (GBN) Simulation ---")
    print(f"Total Frames: {total_frames} | Window Size: {window_size}")
    print(f"==============================================\n")
    
    base = 0          # Oldest unacknowledged frame
    next_seq_num = 0  # Next frame to send
    
    while base < total_frames:
        # Send all available frames within the current window
        while next_seq_num < base + window_size and next_seq_num < total_frames:
            print(f"[Sender] Sending Frame {next_seq_num}")
            next_seq_num += 1
            time.sleep(0.1)
            
        time.sleep(0.3)
        
        # Check acknowledgment for the oldest unacknowledged frame (base)
        print(f"\n[Channel] Checking status for Frame {base}...")
        
        if random.random() < loss_probability:
            # Frame or ACK is lost
            print(f"[Channel] X PACKET/ACK LOSS: Frame {base} failed!")
            print(f"[Sender] ! Timeout ! Retransmitting window starting from Frame {base}\n")
            # Reset next_seq_num back to base to force retransmission of the entire window
            next_seq_num = base
        else:
            # Frame successfully acknowledged
            print(f"[Receiver] ✓ Received Frame {base} successfully. Sending ACK {base + 1}")
            base += 1
            print(f"[Sender] Sliding window forward. New Base: {base}\n")

    print("--- Go-Back-N Simulation Completed Successfully! ---\n")


def simulate_selective_repeat(total_frames, window_size, loss_probability=0.2):
    print(f"\n==============================================")
    print(f"--- Starting Selective Repeat (SR) Simulation ---")
    print(f"Total Frames: {total_frames} | Window Size: {window_size}")
    print(f"==============================================\n")
    
    base = 0
    # Track the state of each frame: False = Not ACKed, True = ACKed
    acked_frames = [False] * total_frames
    # Track which frames have already been sent to prevent redundant sends before timeout checks
    sent_frames = [False] * total_frames
    
    while base < total_frames:
        # Send outstanding frames inside the window
        for i in range(base, min(base + window_size, total_frames)):
            if not acked_frames[i] and not sent_frames[i]:
                print(f"[Sender] Sending Frame {i}")
                sent_frames[i] = True
                time.sleep(0.1)
                
        time.sleep(0.3)
        
        # Check status of sent frames in the current window
        for i in range(base, min(base + window_size, total_frames)):
            if not acked_frames[i]:
                print(f"\n[Channel] Checking status for Frame {i}...")
                
                if random.random() < loss_probability:
                    print(f"[Channel] X PACKET/ACK LOSS: Frame {i} failed!")
                    print(f"[Sender] ! Timeout ! Will retransmit ONLY Frame {i} later.")
                    # Reset sent flag so it gets retransmitted in the next loop iteration
                    sent_frames[i] = False 
                else:
                    print(f"[Receiver] ✓ Received Frame {i} successfully. Sending ACK {i}")
                    acked_frames[i] = True
                    
        # Slide window forward as far as possible past consecutive ACKs
        while base < total_frames and acked_frames[base]:
            base += 1
            print(f"[Sender] Sliding window forward. New Base: {base}")
            
        print()

    print("--- Selective Repeat Simulation Completed Successfully! ---\n")


# Main execution parameters
if __name__ == "__main__":
    # Seed fixed for predictable and comparable random behavior between both runs
    random.seed(42)  
    
    FRAMES_COUNT = 6
    WINDOW_SZ = 3
    LOSS_RATE = 0.3  # 30% chance a packet or its ACK drops
    
    # Run both simulations sequentially
    simulate_go_back_n(total_frames=FRAMES_COUNT, window_size=WINDOW_SZ, loss_probability=LOSS_RATE)
    simulate_selective_repeat(total_frames=FRAMES_COUNT, window_size=WINDOW_SZ, loss_probability=LOSS_RATE)
