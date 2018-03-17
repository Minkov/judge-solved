(defun read-list (n)
  (loop for x from 1 to n
        collect (parse-integer (read-line))
        )
  )

(defun count(current-number, current-count, seq, best)

  (if (eq current-number (first seq))
    then count((first seq) (+ current-count 1) (cdr seq)  )

    )
          

  )

(defvar n)
(defvar numbers)

(setq n (parse-integer (read-line)))
(setq numbers (read-list n))


