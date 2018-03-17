(defvar n)

(setq n (parse-integer (read-line)))
(print n)

(loop for x from 0 to (- n 1)
      do(
         print (* x 5)
         )
      )
