(ns cstest2.core)

(defn alert
  [& args]
  (.log js/console (str/join " " args)))

(defn ^:export init
  []
  (alert "Hello World!"))
