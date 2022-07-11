## Orientation and setup

Welcome! We are excited that you want to learn nanocl.

This page contains step-by-step instructions on how to get started with nanocl. In this tutorial, you’ll learn how to:

* Build and run an image or git repository as a cargo
* Deploy inside a cluster
* Deploy from a file

## Download and install nanocl

This tutorial assumes you have a current version of nanocl installed on your machine.</br>
If you do not have nanocl installed, see [how to install](/guides/installation)

## What is a container?

Now that you’ve run a container, what is a container? Simply put, a container is a sandboxed process on your machine that is isolated from all other processes on the host machine. That isolation leverages kernel namespaces and cgroups, features that have been in Linux for a long time.
To summarize, a container:

- is a runnable instance of an image. You can create, start, stop, move, or delete a container using the nanocl API or CLI.
- can be run on local machines, virtual machines or deployed to the cloud.
- is portable (can be run on any OS)
- are isolated from each other and run their own software, binaries, and configurations.

## What is a container image?

When running a container, it uses an isolated filesystem. This custom filesystem is provided by a **container image**. Since the image contains the container’s filesystem, it must contain everything needed to run an application - all dependencies, configuration, scripts, binaries, etc. The image also contains other configuration for the container, such as environment variables, a default command to run, and other metadata.

We’ll dive deeper into images later on, covering topics such as layering, best practices, and more.

> **Info**
>
> If you’re familiar with <code class="plaintext">chroot</code> think of a container as an extended version of <code class="plaintext">chroot</code>. The filesystem is simply coming from the image.</br> But, a container adds additional isolation not available when simply using chroot.</p>

## What is a cargo ?

A cargo is a pre configurated image ready to be deployed or scalled inside a cluster.
It will start one or more container based on the given image.
