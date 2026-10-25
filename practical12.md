from urllib.parse import urlparse

def url_split_experiment(url_string):
    print("==================================================")
    print("--- URL Split Experiment: Component Extraction ---")
    print(f"Target URL: {url_string}")
    print("==================================================\n")
    
    # Parse the URL structure
    parsed_url = urlparse(url_string)
    
    # Extract the individual components
    scheme = parsed_url.scheme
    hostname = parsed_url.hostname
    port = parsed_url.port
    path = parsed_url.path
    
    # Fallback default values if components are implicit
    if not port:
        port = "443 (Default HTTPS)" if scheme == "https" else "80 (Default HTTP)"
    if not path:
        path = "/"

    # Display components cleanly
    print(f"1. Protocol / Scheme : {scheme}")
    print(f"2. Domain / Hostname  : {hostname}")
    print(f"3. Port Number       : {port}")
    print(f"4. Path Name         : {path}")
    print("\n==================================================")

if __name__ == "__main__":
    # Test URL containing all major components
    test_url = "https://example.com"
    url_split_experiment(test_url)
