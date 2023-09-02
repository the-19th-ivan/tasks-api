import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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
  findAllTask() {
    // TODO: handle sorting
    return this.tasksService.find();
  }

  @Get('/:id')
  async findTask(@Param('id') id: string) {
    const task = await this.tasksService.findOne(id);

    if (!task) throw new NotFoundException();

    return task;
  }

  @Patch('/:id')
  updateTask() {}

  @Delete('/:id')
  removeTask() {}
}
