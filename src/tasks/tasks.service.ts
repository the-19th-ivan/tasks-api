import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}

  create(task: Partial<Task>) {
    const newTask = this.repo.create(task);

    return this.repo.save(newTask);
  }

  find() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  async update(id: string, updatedTask: Partial<Task>) {
    const task = await this.findOne(id);

    Object.assign(task, updatedTask);
    return this.repo.save(task);
  }

  async remove(id: string) {
    const task = await this.findOne(id);

    return this.repo.remove(task);
  }
}
