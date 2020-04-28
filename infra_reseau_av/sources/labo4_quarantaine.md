<center><h1> Labo 4 : Verify IPv4 and IPv6 Addressing </h1></center>

## Partie 1 : Use ipconfig to verify IPv4 addressing

### Etape 1 + 2 :

table d'adressage :

|Device|Interface|IP Address/Prefix|Defaukt Gateway|
|---|---|---|---|
| PC1(IPV4) | NIC | 10.10.1.100 \| 255.255.255.224 | 10.10.1.97 |
| PC1(IPV6) | NIC | 2001:DB8:1:1::A/64  | FE80::1 |
| PC2(IPV4) | NIC | 10.10.1.20 \| 255.255.255.240 | 10.10.1.17 |
| PC2(IPV6) | NIC | 2001:DB8:1:4::A/64 | FE80::3 |

## Partie 2 : Test Connectivity Using Ping

### Etape 1 : Use ping to verify IPv4 connectivity.

* a. le ping se passe bien
* b. le ping se passe bien

### Etape 2 : Use ping to verify IPv6 connectivity.

* a. le ping se passe bien
* b. le ping se passe bien

## Partie 3 : Discover the Path by Tracing the Route

### Etape 1 : Use tracert to discover the IPv4 path.
* a. Il a rencontré :
  - 10.10.1.97 (R1:G0/0)
  - 10.10.1.5 (R2:S0/0/0)
  - 10.10.1.10 (R3:S0/0/1)
  - 10.10.1.20 (PC2)
* b. Il a rencontré :
  - 10.10.1.17 (R3:G0/0)
  - 10.10.1.9 (R2:S0/0/1)
  - 10.10.1.6 (R1:S0/0/1)
  - 10.10.1.100 (PC1)
### Etape 2 : Use tracert to discover the IPv6 path.
* a. Il a rencontré :
  - 2001:DB8:1:1::1 (R1:G0/0)
  - 2001:DB8:1:2::1 (R2:S0/0/0)
  - 2001:DB8:1:3::2 (R3:S0/0/1)
  - 2001:DB8:1:4::A (PC2)
* b. Il a rencontré :
  - 2001:DB8:1:4::1 (R3:G0/0)
  - 2001:DB8:1:3::1 (R2:S0/0/1)
  - 2001:DB8:1:2::2 (R1:S0/0/1)
  - 2001:DB8:1:1::1 (PC1)
