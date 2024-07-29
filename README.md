
# Pathfinding project-:

# Pathfinding Visualization

This project visualizes the A* algorithm for pathfinding on a grid. Users can select start and end points on the grid and run the algorithm to find the shortest path between them. Walls can also be placed on the grid to simulate obstacles.

# Features

Interactive grid where users can select start and end points.
Visualization of the A* algorithm in action.
Ability to reset the grid and run the algorithm again.
Walls to simulate obstacles in the pathfinding process.

Technologies Used -:

React
TypeScript
CSS

# Method 

The user can select start and end points by clicking on the grid cells

After that the user can click on find path button to run Algoritim.

1. The user can reset the whole algorithim, points and path by clicking on reset all button.

2. The user can reset start and end point by clicking on reset points button.

3. The user can reset all blocked point by clicking on reset all blocked points button.

4. The user can select block point by right clicking and can also remove existing block points again simply by right click.

In this start, end, traversed path, blocked path are denoted by different colors.

# Run Jests Tests

To Run jest test cases user can simply go to  _test_ folder
and can run command `npm test Astar.test.tsx`

Here I had added 3 jest cases-:

1. Taken random grid values to check smaller path length 
2. Taken random grid values to greater path length 
3. Snapshot test case


# About Algorithim 

A* is an informed search algorithm, or a best-first search, meaning that it is formulated in terms of weighted graphs: starting from a specific starting node of a graph, it aims to find a path to the given goal node having the smallest cost (least distance travelled, shortest time, etc.). It does this by maintaining a tree of paths originating at the start node and extending those paths one edge at a time until the goal node is reached.

At each iteration of its main loop, A* needs to determine which of its paths to extend. It does so based on the cost of the path and an estimate of the cost required to extend the path all the way to the goal. Specifically, A* selects the path that minimizes

f(n) = g(n) + h(n)

where n is the next node on the path, g(n) is the cost of the path from the start node to n, and h(n) is a heuristic function that estimates the cost of the cheapest path from n to the goal. The heuristic function is problem-specific. If the heuristic function is admissible – meaning that it never overestimates the actual cost to get to the goal – A* is guaranteed to return a least-cost path from start to goal.
