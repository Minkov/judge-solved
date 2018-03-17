main = do
    input <- getContents
    mapM_ (print . solve) $ tail $ lines input

solve line =
    let [x, y] = map read $ words line
    in x + y
