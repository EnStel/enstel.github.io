---
title: ANS
navbar: false
sidebar: false

breadcrumb: false
pageInfo: false
contributors: false
editLink: false
lastUpdated: false
prev: false
next: false
comment: false
footer: false

backtotop: false
---


<!-- 插入 HTML 代码 -->
<document>
<div style="height: 100%; margin: 0; padding: 0;">
  <table  id="dynamicTable" border="1" style="border-collapse: collapse; width:100%; height: 100%; background-color: rgb(255, 250, 250,0.6)" align="center">
    <thead>
      <tr>
        <th>期数</th>
        <th>A</th>
        <th>B</th>
      </tr>
    </thead>
    <tbody>
      <!-- 动态生成的内容将插入这里 -->
    </tbody>
  </table>
  <script>
    // 动态生成表格内容的 JavaScript 代码
    const rowNumbers = Array.from({ length: 20 }, (_, i) => i + 1);
    const aVersionLinkIDs = [
      '101223', '101225', '101226', '101228', '101232', '101233', '101234', '101236', '101238', 
      '101239', '101241', '101242', '101244', '101245', '101246', '101247', '101248', '101249', 
      '101250', '101251'
    ];
    const bVersionLinkIDs = [
      null, '100384', '100385', '100386', '100387', '100388', '100389', '100390', '100391', 
      '100392', '100393', '100395', '100396', '100397', '100398', '100399', '100400', '100401', 
      '100402', '100403'
    ];
    function createTable() {
      const tableBody = document.querySelector('#dynamicTable tbody');
      for (let i = 0; i < rowNumbers.length; i++) {
        const row = document.createElement('tr');
        const numberCell = document.createElement('td');
        numberCell.textContent = rowNumbers[i];
        row.appendChild(numberCell);
        const aCell = document.createElement('td');
        const aLink = document.createElement('a');
        aLink.href = `https://www.xyybs.com/index.php?m=wap&a=show&ewm=1&from=zym&catid=152&id=${aVersionLinkIDs[i]}`;
        aLink.textContent = `A版第${rowNumbers[i]}期所放参考答案`;
        aCell.appendChild(aLink);
        row.appendChild(aCell);
        const bCell = document.createElement('td');
        if (bVersionLinkIDs[i]) {
          const bLink = document.createElement('a');
          bLink.href = `https://www.xyybs.com/index.php?m=wap&a=show&ewm=1&from=zym&catid=152&id=${bVersionLinkIDs[i]}`;
          bLink.textContent = `B版第${rowNumbers[i]}期所放参考答案`;
          bCell.appendChild(bLink);
        } else {
          const placeholderSpan = document.createElement('span');
          placeholderSpan.id = 'clickableText';
          placeholderSpan.textContent = 'null';
          bCell.appendChild(placeholderSpan);
        }
        bCell.style.textAlign = 'center';
        row.appendChild(bCell);
        tableBody.appendChild(row);
      }
    }
    createTable();
  </script>
</div>
</document>
