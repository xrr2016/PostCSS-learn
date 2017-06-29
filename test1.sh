#!/bin/bash

f2c() {
  echo "输入华氏温度获得摄式温度"
  read f
  a=5
  b=9
  c=35
  d=`expr $a / $b * ($f - $c)`
  echo "摄氏温度为: $d" 
}

f2c