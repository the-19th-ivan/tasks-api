import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dtos/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAllTask() {}

  @Get('/:id')
  findTask() {}

  @Patch('/:id')
  updateTask() {}

  @Delete('/:id')
  removeTask() {}
}
