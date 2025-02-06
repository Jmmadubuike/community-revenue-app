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

    async def all_data(self, limit=None, offset=None) -> QuerySet:
        query = self.filter(deleted=False)
        
        if not limit and not offset:
            return await query

        if limit:
            query = query.limit(limit)

        if offset:
            query = query.offset(offset)

        return await query

    async def exclude_qs(self, *args, **kwargs ) -> QuerySet:
        """If you want to exclude deleted records from queries."""
        return await self.exclude(deleted=False, *args, **kwargs)