<meta charset="utf-8">

# 簡易計算機

## 功能

可以進行簡單的四則運算

## 技術手段

1.利用 result.innerText = eval(a.value + cal.value + b.value) 進行四則運算

2.使用 document.getElementById('') 取得需要的資料

3.使用 <script src="calculate.js"></script> 將JavaScript套用至HTML

## 說明

1.輸入 'fsti'、'scdi' 兩個數目並選擇 'operator' 運算符號

2.運用 eval(fsti.value + operator.value + scdi.value) 算出結果

3.利用 result.innerText 將結果轉為 'result' 中的值