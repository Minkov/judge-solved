class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    enqueue(...values) {
        if (values.length === 1) {
            const next = {
                value: values[0],
            };

            this.count += 1;
            if (!this.head) {
                this.head = next;
                this.tail = next;
            } else {
                this.tail.next = next;
                this.tail = this.tail.next;
            }
        } else {
            values.forEach(val => this.enqueue(val));
        }
    }

    dequeue() {
        const val = this.head.value;
        this.count -= 1;
        this.head = this.head.next;
        return val;
    }

    isEmpty() {
        return this.count === 0;
    }

    get top() {
        return this.head.value;
    }
}

// 2, 3, 5, 4

const solve = (n, m) => {
    const queue = new Queue();
    queue.enqueue([n, 1]);

    while (queue.isEmpty() === false) {
        const [current, count] = queue.dequeue();
        if (count === m) {
            // console.log(current);
            print(current);
            return;
        } else {
            queue.enqueue([current + 1, count + 1]);
            queue.enqueue([2 * current + 1, count + 2]);
            queue.enqueue([current + 2, count + 3]);
        }
    }
};
solve(...gets().split(' ').map(Number));