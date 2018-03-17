(defun is-prime (n &optional (d (- n 1)))
  (or (= d 1)
      (and (/= (rem n d) 0)
           (is-prime  n (- d 1)))))

(defun max-prime (n)
  (or (and
        (is-prime n)
        (return-from max-prime n)
        )
      (max-prime (- n 1))
      )
  )

(defvar n)
(setq n (parse-integer (read-line)))
(print (max-prime n))
