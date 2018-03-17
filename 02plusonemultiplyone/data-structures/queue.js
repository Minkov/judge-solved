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

module.exports = {
    Queue
};