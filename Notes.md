Node.js(Advanced) Notes:

1-Five operations occur in every tick(while loop maslan of the event loop) of the event loop of Node.Js:
1-Node looks at pending timers and sees if any functions are ready to be called.(setTimeout and setInterval)
2-Node looks at pendingOSTasks and pendingOperations and call  relevant callbacks
3-pause execution,continue when a new pendingOSTask is done,a new pendingOperation is done and a timer is about to start
4-look at pendingTimers and call any set immediate 
5-handle close(cleanup) events to for example clear memory when reading a stream of data

2-Fs.module enables us to read and write data to the hard drive of the laptop

3-The event loop uses a single thread so node is not entirely single thread

4- A thread represents a linear series of instructions to be done by our cpu

5-Node.js in general is single threaded but some of its function and frameworks are not single threaded

6- Libuv uses something called a thread pool which has 4 other threads that execute very expensive and heavy data computations that can be done outside Node.js event loop

7-clustering means having several instances of node to handle heavy operations

8- when we run node index.js for the first time a first instance of node is created and it is called the cluster manager which sets which code to execute and so on but then after a while it wont be the cluster manager and several instances of node will be created
 
10- when fork is done then the index.js will be called several times

11- every child has a total number of threads of 4 but we can restrict this thredpool at the begining of our code by using : 
process.env.UV_THREADPOOL_SIZE
 