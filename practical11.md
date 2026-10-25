leaky bucket

import random
import time

def leaky_bucket_simulation(bucket_capacity, leak_rate, total_packets):
    print("==================================================")
    print("--- Leaky Bucket Congestion Control Simulation ---")
    print(f"Bucket Capacity: {bucket_capacity} units")
    print(f"Leak Rate: {leak_rate} units/second")
    print("==================================================\n")
    
    current_buffer = 0
    
    for i in range(1, total_packets + 1):
        incoming_packet = random.randint(2, 10)
        print(f"Time Step {i}: Incoming packet size = {incoming_packet}")
        
        # Check if the incoming packet causes an overflow
        if current_buffer + incoming_packet > bucket_capacity:
            print(f"  [!] OVERFLOW: Bucket full ({current_buffer}/{bucket_capacity}). Packet dropped.")
        else:
            current_buffer += incoming_packet
            print(f"  [+] ACCEPTED: Packet added. Current buffer: {current_buffer}/{bucket_capacity}")
            
        # Simulate the constant leak/transmission process
        if current_buffer > 0:
            transmitted = min(current_buffer, leak_rate)
            current_buffer -= transmitted
            print(f"  [-] TRANSMITTED: Leaked {transmitted} units. Buffer left: {current_buffer}/{bucket_capacity}")
        else:
            print("  [-] IDLE: Bucket is empty. No data to transmit.")
            
        print("-" * 50)
        time.sleep(0.5)

if __name__ == "__main__":
    # Ensure reproducible packet sizes across runs
    random.seed(42)  
    
    # Configuration parameters
    BUCKET_CAPACITY = 15
    LEAK_RATE = 4
    TOTAL_PACKETS = 6
    
    leaky_bucket_simulation(BUCKET_CAPACITY, LEAK_RATE, TOTAL_PACKETS)


