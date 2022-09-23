export const markdownData = `
<h1 id="nxtmdoc-meta-title">Your first cargo</h1>

<blockquote class="tags">
 <strong>Tags</strong>
 </br>
 <span id="nxtmdoc-meta-keywords">
  documentation, guides, get started, cargo, create cargo
 </span>
</blockquote>

<p id="nxtmdoc-meta-description">
Get started with nanocl by creating your first cargo using the CLI !
</p>

<h2> Create your cargo </h2>

You can create and run a cargo in one command:
```sh
nanocl run --cluster dev --network front --image nginx:1.23 my-cargo
```

Aftewards inspect the cargo to know what is its ip address
```sh
nanocl cargo inspect my-cargo
```

It should output some something like this
```console
> CARGO
KEY                NAME        IMAGE_NAME    REPLICAS    DOMAINNAME    HOSTNAME    DNS_ENTRY
global-my-cargo    my-cargo    nginx:1.23    1

> CONTAINERS
NAMES                  IMAGE         PORTS    STATE      STATUS           NETWORK_SETTINGS
global-dev-my-cargo    nginx:1.23    0:80     running    Up 14 seconds    172.19.0.2
```

Then you can test with a curl
```sh
curl 172.19.0.2
```

<table>
  <tr>
    <th align="left">
      <img class="nxtmdoc-delete" width="400" height="0">
      <a href="/guides/nanocl/get-started/1.orientation-and-setup.md">Prev</a>
    </th>
	<th align="right">
      <img class="nxtmdoc-delete" width="400" height="0">
      <a href="/guides/nanocl/get-started/3.your-first-git-repository.md">Next</a>
    </th>
</tr>
</table>
`
