(defproject cstest2 "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-cljsbuild "1.0.0-alpha2"]]
  :cljsbuild {
	  :builds [{
	      :source-paths ["cljs"]
	      :compiler {
	        :output-to "main.js"
		:output-dir "out"
	        :optimizations :advanced
                :source-map "out/main-map.js"
	        :pretty-print true}}]}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2030"]
                 ])
