//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

//Merge nums1 and nums2 into a single array sorted in non-decreasing order.
var merge = function (nums1,m,nums2,n){
    for (let i = 0 ; i<n; i++){
        nums1[m+i] = nums2[i]
        let j=0;
        while(j<m+i){
            if(nums1[j]>nums1[m+i]){
               var  temp = nums1[m+i];
                nums1[m+i] = nums1[j];
                nums1[j] = temp;
            }
            j++;
        }
    }
}