def solution(m, n, puddles):
    answer = 0
    
    grid = [[1] * m for _ in range(n)]
    
    if puddles:
        for puddle in puddles:
            grid[puddle[1]-1][puddle[0]-1] = 0
    
    index_of_zero = -1
    if 0 in grid[0]:
        index_of_zero = grid[0].index(0)
    
    if index_of_zero != -1:
        for i in range(index_of_zero, m):
            grid[0][i] = 0
    
    for i in range(1, n):
        if grid[i][0] == 0 and i < n-1:
            grid[i+1][0] = 0
    
    for i in range(1, n):
        for j in range(1, m):
            if grid[i][j] != 0:
                grid[i][j] = (grid[i-1][j] + grid[i][j-1]) % 1000000007
    
    answer = grid[-1][-1]
    
    return answer
