function getPager(totalItems, currentPage, pageSize) { 
  2
  // default to first page 
  3
         currentPage = currentPage || 1; 
  4
  5
         // default page size is 10 
  6
         pageSize = pageSize || 10; 
  7
  8
         // calculate total pages 
  9
         var totalPages = Math.ceil(totalItems / pageSize); 
  10
  11
         var startPage, endPage; 
  12
         if (totalPages <= 10) { 
  13
             // less than 10 total pages so show all 
  14
             startPage = 1; 
  15
             endPage = totalPages; 
  16
         } else { 
  17
             // more than 10 total pages so calculate start and end pages 
  18
             if (currentPage <= 6) { 
  19
                 startPage = 1; 
  20
                 endPage = 10; 
  21
             } else if (currentPage + 4 >= totalPages) { 
  22
                 startPage = totalPages - 9; 
  23
                 endPage = totalPages; 
  24
             } else { 
  25
                 startPage = currentPage - 5; 
  26
                 endPage = currentPage + 4; 
  27
             } 
  28
         } 
  29
  30
          // calculate start and end item indexes 
  31
         var startIndex = (currentPage - 1) * pageSize; 
  32
         var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1); 
  33
  34
          // create an array of pages to ng-repeat in the pager control 
  35
         var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i); 
  36
  37
         // return an object with all pager properties required by the view 
  38
         return { 
  39
  totalItems: totalItems, 
40
  currentPage: currentPage, 
41
  pageSize: pageSize, 
42
  totalPages: totalPages, 
43
  startPage: startPage, 
44
  endPage: endPage, 
45
  startIndex: startIndex, 
46
  endIndex: endIndex, 
47
  pages: pages 
  48
         }
  49
     }

     export default getPager;