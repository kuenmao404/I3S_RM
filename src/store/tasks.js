import create from 'zustand'

// 範例數據
const sampleTasks = {
  actionItems: [
    {
      aid: "1",
      sid: "1",
      title: "完成會議記錄",
      content: "整理並完成本次會議的詳細記錄文件",
      dueDate: "2024-03-09",
      status: 1,
      completedAt: null
    },
    {
      aid: "2",
      sid: "1", 
      title: "準備簡報",
      content: "準備下次會議的簡報內容",
      dueDate: "2024-03-10",
      status: 0,
      completedAt: "2024-03-10"
    },
    {
      aid: "3",
      sid: "1",
      title: "客戶會議",
      content: "與客戶討論專案進度",
      dueDate: "2024-03-15",
      status: 1,
      completedAt: null
    }
  ]
}

const useTaskStore = create((set, get) => ({
  tasks: sampleTasks.actionItems,
  currentFilter: 'all',
  setFilter: (filter) => set({ currentFilter: filter }),
  
  updateTaskStatus: (taskId) => {
    set(state => ({
      tasks: state.tasks.map(task => {
        if (task.aid === taskId) {
          const newStatus = task.status === 1 ? 0 : 1
          return {
            ...task,
            status: newStatus,
            completedAt: newStatus === 0 ? new Date().toISOString() : null
          }
        }
        return task
      })
    }))
  },

  updateTaskDueDate: (taskId, newDate) => {
    set(state => ({
      tasks: state.tasks.map(task => {
        if (task.aid === taskId) {
          // 如果 newDate 是空值或無效值，直接設為 null
          if (!newDate || newDate === '') {
            return {
              ...task,
              dueDate: null
            }
          }
          
          try {
            // 嘗試解析日期
            const date = new Date(newDate)
            // 檢查是否為有效日期
            if (isNaN(date.getTime())) {
              return {
                ...task,
                dueDate: null
              }
            }
            return {
              ...task,
              dueDate: date.toISOString().split('T')[0]
            }
          } catch (error) {
            console.error('Invalid date:', error)
            return {
              ...task,
              dueDate: null
            }
          }
        }
        return task
      })
    }))
  },

  getFilteredTasks: () => {
    const { tasks, currentFilter } = get()
    const today = new Date()
    const nextWeek = new Date(today)
    nextWeek.setDate(today.getDate() + 7)
    
    switch (currentFilter) {
      case 'today':
        return tasks.filter(task => {
          if (!task.dueDate) return false
          const dueDate = new Date(task.dueDate)
          return dueDate.toDateString() === today.toDateString() && task.status === 1
        })
      case 'week':
        return tasks.filter(task => {
          if (!task.dueDate) return false
          const dueDate = new Date(task.dueDate)
          return dueDate >= today && dueDate <= nextWeek && task.status === 1
        })
      case 'pending':
        return tasks.filter(task => !task.dueDate && task.status === 1)
      case 'completed':
        return tasks.filter(task => task.status === 0)
      default:
        return tasks
    }
  }
}))

export default useTaskStore 