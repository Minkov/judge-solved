(defun delimiterp (c) (or (char= c #\Space) (char= c #\,)))

(defun my-split (string &key (delimiterp #'delimiterp))
  (loop :for beg = (position-if-not delimiterp string)
        :then (position-if-not delimiterp string :start (1+ end))
        :for end = (and beg (position-if delimiterp string :start beg))
        :when beg :collect (subseq string beg end)
        :while end))

(defvar n)
(defvar ab)



(defun solve()
  (setq n (parse-integer (read-line)))

  (setq ab (loop for x from 1 to n
                 do (
                     print (
                            reduce #'+ (map 'list #'(lambda (x) (parse-integer x)) (my-split (read-line)))
                            )
                     )
                 )
        )
  )

(solve)

