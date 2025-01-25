from tortoise.manager import Manager
from tortoise.queryset import QuerySet

class QueryManager(Manager):
    """Custom manager to handle soft deletes."""
    def filter_qs(self, *args, **kwargs) -> QuerySet:
        kwargs['deleted'] = False
        return self.filter(*args, **kwargs)  
        

    async def get_obj(self, *args, **kwargs) -> QuerySet:
        kwargs['deleted'] = True  
        return await self.filter(deleted = False).get(*args, **kwargs)

    async def all_data(self) -> QuerySet:
        return await self.filter(deleted=True)

    async def exclude_qs(self, *args, **kwargs ) -> QuerySet:
        """If you want to exclude deleted records from queries."""
        return await self.exclude(deleted=False, *args, **kwargs)