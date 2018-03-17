let n = Int(readLine()!)!

for _ in 0..<n {
    let ab = readLine()!.split {$0 == " "}
        .map { Int($0)! }
    print(ab[0] + ab[1])
}
