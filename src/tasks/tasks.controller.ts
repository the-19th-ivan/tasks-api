import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAllTask() {
    // TODO: handle sorting
    return this.tasksService.find();
  }

  @Get('/:id')
  findTask(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch('/:id')
  updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete('/:id')
  @HttpCode(204)
  removeTask(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
