#!/bin/sh
cat head.html > tmp
pandoc index.md >> tmp
cat foot.html >> tmp
awk 'BEGIN {
  while ((getline line < "talks/schedule.html") > 0)
    html = html line ORS
  close("talks/schedule.html")
}
{
  gsub(/SCHEDULE/, html)
  print
}' tmp > index.html
rm -f tmp
