import random
import time

def simulate_go_back_n(total_frames, window_size, loss_probability=0.2):
    print(f"\n==============================================")
    print(f"--- Starting Go-Back-N (GBN) Simulation ---")
    print(f"Total Frames: {total_frames} | Window Size: {window_size}")
    print(f"==============================================\n")
    
    base = 0          
    next_seq_num = 0  
    
    while base < total_frames:
        while next_seq_num < base + window_size and next_seq_num < total_frames:
            print(f"[Sender] Sending Frame {next_seq_num}")
            next_seq_num += 1
            time.sleep(0.1)
            
        time.sleep(0.3)
        print(f"\n[Channel] Checking status for Frame {base}...")
        
        if random.random() < loss_probability:
            print(f"[Channel] X PACKET/ACK LOSS: Frame {base} failed!")
            print(f"[Sender] ! Timeout ! Retransmitting window starting from Frame {base}\n")
            next_seq_num = base
        else:
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
    acked_frames = [False] * total_frames
    sent_frames = [False] * total_frames
    
    while base < total_frames:
        for i in range(base, min(base + window_size, total_frames)):
            if not acked_frames[i] and not sent_frames[i]:
                print(f"[Sender] Sending Frame {i}")
                sent_frames[i] = True
                time.sleep(0.1)
                
        time.sleep(0.3)
        
        for i in range(base, min(base + window_size, total_frames)):
            if not acked_frames[i]:
                print(f"\n[Channel] Checking status for Frame {i}...")
                
                if random.random() < loss_probability:
                    print(f"[Channel] X PACKET/ACK LOSS: Frame {i} failed!")
                    print(f"[Sender] ! Timeout ! Will retransmit ONLY Frame {i} later.")
                    sent_frames[i] = False 
                else:
                    print(f"[Receiver] ✓ Received Frame {i} successfully. Sending ACK {i}")
                    acked_frames[i] = True
                    
        while base < total_frames and acked_frames[base]:
            base += 1
            print(f"[Sender] Sliding window forward. New Base: {base}")
            
        print()

    print("--- Selective Repeat Simulation Completed Successfully! ---\n")


if __name__ == "__main__":
    random.seed(42)  
    
    FRAMES_COUNT = 6
    WINDOW_SZ = 3
    LOSS_RATE = 0.3  
    
    simulate_go_back_n(total_frames=FRAMES_COUNT, window_size=WINDOW_SZ, loss_probability=LOSS_RATE)
    simulate_selective_repeat(total_frames=FRAMES_COUNT, window_size=WINDOW_SZ, loss_probability=LOSS_RATE)
