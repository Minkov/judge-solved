(defun read-list (n)
  (loop for x from 1 to n
        collect (parse-integer (read-line))
        )
  )

(defvar n)
(defvar k)
(defvar numbers)

(setq n (parse-integer (read-line)))
(setq k (parse-integer (read-line)))
(setq numbers (read-list n))
(setf numbers (stable-sort numbers #'>))

(setq numbers (subseq numbers 0 k))
(print (reduce #'+ numbers))

